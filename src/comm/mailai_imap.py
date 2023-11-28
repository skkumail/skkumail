import logging

from django.contrib.auth.models import User
from imap_tools import MailBox, AND, MailboxLoginError

from authapp.models import UserProfile
from comm.mailai_base64 import process_email_to_include_base64_images
from comm.smtp_crypto import decrypt_smtp_password
from rmailapp.models import Email

logger = logging.getLogger(__name__)


def fetch_emails(user_id: int) -> bool:
    try:
        user = User.objects.get(id=user_id)
        # print(user)
        user_profile = UserProfile.objects.get(user=user)
        # print(user_profile)
        imap_password = decrypt_smtp_password(
            user_profile.encrypted_smtp_password)
        # print(imap_password)
        email_user_name = user.email
        # print(email_user_name)
    except Exception as e:
        logger.error(f"Failed to retrieve user details: {e}")
        return False

    try:
        with MailBox('imap.gmail.com').login(username=email_user_name, password=imap_password,
                                             initial_folder='INBOX') as mailbox:
            for msg in mailbox.fetch(AND(all=True)):
                processed_body = process_email_to_include_base64_images(msg)
                Email.objects.update_or_create(
                    uid=msg.uid,
                    defaults={
                        'subject': msg.subject,
                        'sender': msg.from_,
                        'recipient': ",".join(msg.to),
                        'date': msg.date,
                        'body': processed_body,
                        'username': user,
                    }
                )
            # Logout 불필요 (context manager)
            return True
    except MailboxLoginError as e:
        logger.error(f"Failed to log in to the mailbox: {e}")
        return False
    except Exception as e:
        logger.error(f"An unexpected error occurred: {e}")
        return False
