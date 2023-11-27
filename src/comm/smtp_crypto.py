from cryptography.fernet import Fernet
from django.conf import settings

# Initialize Fernet instance
fernet = Fernet(settings.DJANGO_CRYPTOGRAPHY_KEY)


def encrypt_smtp_password(password):
    """Encrypt the SMTP password."""
    return fernet.encrypt(password.encode()).decode()


def decrypt_smtp_password(encrypted_password):
    """Decrypt the SMTP password."""
    return fernet.decrypt(encrypted_password.encode()).decode()
