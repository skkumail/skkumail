OUTLOOK = 'outlook'
GMAIL = 'gmail'
NAVER = 'naver'

SMTP_SERVERS = {
    OUTLOOK: 'smtp.office365.com',
    GMAIL: 'smtp.gmail.com',
    NAVER: 'smtp.worksmobile.com'
}

IMAP_SERVERS = {
    OUTLOOK: 'outlook.office365.com',
    GMAIL: 'imap.gmail.com',
    NAVER: 'imap.worksmobile.com'
}


class ServerTypeException(Exception):
    def __init__(self, message="Email server not recognized"):
        self.message = message
        super().__init__(self.message)


def email_to_server_type(email: str) -> str:
    email_server = email.split('@')[-1]

    if email_server in ['skku.edu', 'naver.com']:
        return NAVER
    elif email_server in ['intueri.ai', 'gmail.com', 'g.skku.edu']:
        return GMAIL
    elif email_server in ['outlook.com', 'outlook.kr']:
        return OUTLOOK
    else:
        raise ServerTypeException(f"Unrecognized email server domain: {email_server}")


def get_smtp_server(server_type: str) -> str:
    return SMTP_SERVERS.get(server_type, "Unknown SMTP server")


def get_imap_server(server_type: str) -> str:
    return IMAP_SERVERS.get(server_type, "Unknown IMAP server")


# Example Usage
try:
    server_type = email_to_server_type("example@outlook.com")
    smtp_server = get_smtp_server(server_type)
    imap_server = get_imap_server(server_type)
    print(f"SMTP Server: {smtp_server}, IMAP Server: {imap_server}")
except ServerTypeException as e:
    print(f"Error: {e}")
