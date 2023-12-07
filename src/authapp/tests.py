# Create your tests here.
from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User
from unittest.mock import patch

from authapp.forms import SignupForm
from authapp.models import UserProfile


class SignupFlowTests(TestCase):
    """
    1) 폼 레벨 : 암호화 함수가 호출되고 결과가 UserProfile 에 저장되는지
    2) 뷰  레벨 :                       정상 가입 후 /login 으로 리다이렉트 되는지
    """

    def _valid_formdata(self) -> dict:
        return {
            "username": "tester",
            "first_name": "Test",
            "last_name": "User",
            "email": "tester@gmail.com",
            "password1": "S3cretpw!",
            "password2": "S3cretpw!",
            "smtp_password": "smtp‑pw",
        }

    def test_signup_form_saves_profile_with_encrypted_password(self):
        data = self._valid_formdata()

        # encrypt_smtp_password 가 실제 암호화 대신 'enc_<원본>' 을 반환하도록 패치
        with patch("authapp.forms.encrypt_smtp_password", lambda pw: f"enc_{pw}"):
            form = SignupForm(data)
            self.assertTrue(form.is_valid())
            user = form.save()

        profile = UserProfile.objects.get(user=user)
        self.assertEqual(profile.encrypted_smtp_password, "enc_smtp‑pw")

    def test_signup_view_redirects_after_success(self):
        client = Client()

        with (
            patch("authapp.views.encrypt_smtp_password", lambda pw: f"enc_{pw}"),
            patch("authapp.views.decrypt_smtp_password", lambda pw: "smtp‑pw"),
            patch("authapp.views.verify_smtp_credentials", return_value=True),
        ):
            resp = client.post(reverse("signup"), data=self._valid_formdata(), follow=False)

        self.assertEqual(resp.status_code, 302)
        self.assertEqual(resp.url, reverse("login"))