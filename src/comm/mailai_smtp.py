import smtplib

from django.contrib.auth.models import User
from django.core.mail import get_connection, EmailMessage

from authapp.models import UserProfile
from comm.smtp_crypto import decrypt_smtp_password
from comm.mailai_compatibility import MailServerCompativility

mail_server_compatibility = MailServerCompativility()


def send_mail(user_id, recipient, subject, message):
    try:

        user = User.objects.get(id=user_id)
        user_profile = UserProfile.objects.get(user=user)

        server_type = mail_server_compatibility.email_to_server_type(email=user.email)
        smtp_server = mail_server_compatibility.get_smtp_server(server_type=server_type)
        print(f"SMTP Server: {smtp_server}")

        smtp_password = decrypt_smtp_password(user_profile.encrypted_smtp_password)
        connection = get_connection(
            backend='django.core.mail.backends.smtp.EmailBackend',
            username=user.email,
            # host='smtp.gmail.com',
            host=smtp_server,
            port='587',
            password=smtp_password,
            use_tls=True  # Use TLS
        )

        email = EmailMessage(
            subject=subject,
            body=message,
            from_email=user.email,
            to=[recipient],
            connection=connection
        )
        email.send()
    except mail_server_compatibility.ServerTypeException as e:
        print(f"Error: {e}")


def verify_smtp_credentials(email, smtp_password):
    try:
        server_type = mail_server_compatibility.email_to_server_type(email=email)
        smtp_server = mail_server_compatibility.get_smtp_server(server_type=server_type)
        print(f"SMTP Server: {smtp_server}")
        with smtplib.SMTP(smtp_server, 587) as server:
            server.starttls()
            server.login(email, smtp_password)
            return True

    except smtplib.SMTPAuthenticationError:
        return False
    except smtplib.SMTPException as e:
        print(f"An SMTP error occurred: {e}")
        return False
    except mail_server_compatibility.ServerTypeException as e:
        print(f"Error: {e}")
