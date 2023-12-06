import logging

from django.contrib.auth.models import User
from django.utils.timezone import is_aware, make_aware, get_default_timezone
from imap_tools import MailBox, AND, MailboxLoginError

from authapp.models import UserProfile
from comm.mailai_base64 import process_email_to_include_base64_images
from comm.mailai_compatibility import MailServerCompativility
from comm.smtp_crypto import decrypt_smtp_password
from rmailapp.models import Email

mail_server_compatibility = MailServerCompativility()

logger = logging.getLogger(__name__)


def fetch_emails(user_id: int, max_emails: int = 500, mark_seen: bool = False) -> bool:
    try:
        user = User.objects.get(id=user_id)
        user_profile = UserProfile.objects.get(user=user)
        imap_password = decrypt_smtp_password(user_profile.encrypted_smtp_password)
        email_user_name = user.email
    except Exception as e:
        logger.error(f"Failed to retrieve user details: {e}")
        return False

    try:
        server_type = mail_server_compatibility.email_to_server_type(user.email)
        imap_server = mail_server_compatibility.get_imap_server(server_type)
        print(f"IMAP Server: {imap_server}")
        with MailBox(imap_server).login(email_user_name, imap_password, initial_folder='INBOX') as mailbox:
            for msg in mailbox.fetch(AND(all=True), limit=max_emails, reverse=True,  mark_seen=mark_seen):
                processed_body = process_email_to_include_base64_images(msg)
                if not is_aware(msg.date):
                    cur_date = make_aware(msg.date, get_default_timezone())
                else:
                    cur_date = msg.date

                Email.objects.update_or_create(
                    uid=msg.uid,
                    defaults={
                        'subject': msg.subject,
                        'sender': msg.from_,
                        'recipient': ",".join(msg.to),
                        'date': cur_date,
                        'body': processed_body,
                        'user_id': user_id,
                    }
                )
            return True
    except MailboxLoginError as e:
        logger.error(f"Failed to log in to the mailbox: {e}")
        return False
    except mail_server_compatibility.ServerTypeException as e:
        print(f"Error: {e}")
    except Exception as e:
        logger.error(f"An unexpected error occurred: {e}")
        return False