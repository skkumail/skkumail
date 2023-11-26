# utils.py

def generate_mail_content(name, relation, style, text):
    # Call ChatGPT API to generate mail content
    # This is a placeholder function
    return "Generated email content based on input parameters."


def send_mail(recipient, subject, message):
    # Send the email using your preferred method (SMTP, SendGrid, etc.)
    pass


from django.core.mail import get_connection, EmailMessage
from django.contrib.auth.models import User
from authapp.models import UserProfile


def decrypt_password(encrypted_password):
    # Placeholder for the decryption logic
    # You need to replace this with your actual decryption method
    return encrypted_password  # Replace this with the decrypted password


def send_mail(user_id, recipient, subject, message):
    # Retrieve the User and UserProfile from authapp
    user = User.objects.get(id=user_id)
    user_profile = UserProfile.objects.get(user=user)

    # Decrypt the stored encrypted SMTP password
    smtp_password = decrypt_password(user_profile.encrypted_smtp_password)

    # Assuming you're using Django's default email backend
    connection = get_connection(
        backend='django.core.mail.backends.smtp.EmailBackend',
        host='your_smtp_host',  # e.g., 'smtp.gmail.com'
        port='your_smtp_port',  # e.g., 587
        username=user.email,  # User's email as the SMTP username
        password=smtp_password,  # Decrypted password
        use_tls=True  # Use TLS
    )

    # Send the email using the connection
    email = EmailMessage(
        subject=subject,
        body=message,
        from_email=user.email,  # Use the user's email address
        to=[recipient],
        connection=connection
    )
    email.send()
