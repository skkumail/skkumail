# Create your tests here.
from django.test import SimpleTestCase
from unittest.mock import patch
from comm.mailai_compatibility import MailServerCompativility
from comm.smtp_crypto import encrypt_smtp_password, decrypt_smtp_password


class CompatibilityTests(SimpleTestCase):
    """
    이메일 도메인 ➜ 서버 타입 매핑이 올바른지 (가장 빈번히 호출되는 로직)
    """

    def setUp(self):
        self.comp = MailServerCompativility()

    def test_domain_mapping(self):
        self.assertEqual(self.comp.email_to_server_type("user@g.skku.edu"), self.comp.GMAIL)
        self.assertEqual(self.comp.email_to_server_type("user@skku.edu"), self.comp.NAVER)
        self.assertEqual(self.comp.email_to_server_type("user@outlook.com"), self.comp.OUTLOOK)

    def test_unknown_domain_raises(self):
        with self.assertRaises(self.comp.ServerTypeException):
            self.comp.email_to_server_type("user@unknown.com")


class CryptoTests(SimpleTestCase):
    """
    Fernet 대칭키 암·복호화가 역함수 관계인지
    (settings.DJANGO_CRYPTOGRAPHY_KEY 는 테스트 DB 로드 시 자동 세팅됨)
    """

    def test_encrypt_decrypt_roundtrip(self):
        pw = "smtp‑secret"
        enc = encrypt_smtp_password(pw)
        dec = decrypt_smtp_password(enc)
        self.assertEqual(dec, pw)