import smtplib


def verify_smtp_credentials(email, smtp_password):
    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as server:  # Replace with your SMTP server
            server.starttls()
            server.login(email, smtp_password)
            return True
    except smtplib.SMTPAuthenticationError:
        return False
    except smtplib.SMTPException as e:
        print(f"An SMTP error occurred: {e}")
        return False
