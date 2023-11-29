class MailServerCompativility:
    def __init__(self):
        self.OUTLOOK = 'outlook'
        self.GMAIL = 'gmail'
        self.NAVER = 'naver'

        self.SMTP_SERVERS = {
            #self.OUTLOOK: 'smtp-mail.office365.com',
            self.OUTLOOK: 'smtp-mail.outlook.com',
            self.GMAIL: 'smtp.gmail.com',
            self.NAVER: 'smtp.worksmobile.com'
        }

        self.IMAP_SERVERS = {
            self.OUTLOOK: 'outlook.office365.com',
            self.GMAIL: 'imap.gmail.com',
            self.NAVER: 'imap.worksmobile.com'
        }

    class ServerTypeException(Exception):
        def __init__(self, message="Email server not recognized"):
            self.message = message
            super().__init__(self.message)

    def email_to_server_type(self, email: str) -> str:
        email_server = email.split('@')[-1]

        if email_server in ['skku.edu', 'naver.com']:
            return self.NAVER
        elif email_server in ['intueri.ai', 'gmail.com', 'g.skku.edu']:
            return self.GMAIL
        elif email_server in ['outlook.com', 'outlook.kr']:
            return self.OUTLOOK
        else:
            raise self.ServerTypeException(f"Unrecognized email server domain: {email_server}")

    def get_smtp_server(self, server_type: str) -> str:
        return self.SMTP_SERVERS.get(server_type, "Unknown SMTP server")

    def get_imap_server(self, server_type: str) -> str:
        return self.IMAP_SERVERS.get(server_type, "Unknown IMAP server")
