import smtplib

from django.contrib.auth.models import User
from django.core.mail import get_connection, EmailMessage

from authapp.models import UserProfile
from comm.smtp_crypto import decrypt_smtp_password


def send_mail(user_id, recipient, subject, message):
    user = User.objects.get(id=user_id)
    user_profile = UserProfile.objects.get(user=user)

    smtp_password = decrypt_smtp_password(user_profile.encrypted_smtp_password)
    connection = get_connection(
        backend='django.core.mail.backends.smtp.EmailBackend',
        username=user.email,
        host='smtp.gmail.com',
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


def verify_smtp_credentials(email, smtp_password):
    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(email, smtp_password)
            return True
    except smtplib.SMTPAuthenticationError:
        return False
    except smtplib.SMTPException as e:
        print(f"An SMTP error occurred: {e}")
        return False
