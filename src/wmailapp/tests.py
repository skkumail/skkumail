from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User
from unittest.mock import patch


class MailWizardTests(TestCase):
    """
    ① GET : 폼 두 개가 렌더링되는지만 확인
    ② POST(generate_mail) : 외부 LLM 호출을 Mock 하여 제목/본문이 템플릿에 전달되는지
    """

    def setUp(self):
        self.user = User.objects.create_user("u", password="p")

    def test_get_renders_forms(self):
        c = Client()
        c.login(username="u", password="p")
        resp = c.get(reverse("generate_mail"))

        # GenerateMailForm 의 필드만 확인
        self.assertContains(resp, 'name="name"')
        self.assertContains(resp, 'name="relation"')
        self.assertContains(resp, 'name="style"')
        self.assertContains(resp, 'name="text"')

    @patch("wmailapp.views.generate_mail_title", return_value="Mocked Subject")
    @patch("wmailapp.views.generate_mail_content", return_value="Mocked Body")
    def test_generate_mail_flow(self, mock_content, mock_title):
        c = Client()
        c.login(username="u", password="p")

        data = {
            "name": "Alice",
            "relation": "colleague",
            "style": "formal",
            "text": "How are you?",
            "generate_mail": "1",  # 버튼 이름
        }
        resp = c.post(reverse("generate_mail"), data)
        self.assertEqual(resp.status_code, 200)
        # 템플릿 컨텍스트에 Mocked 값이 들어갔는지
        self.assertContains(resp, "Mocked Subject")
        self.assertContains(resp, "Mocked Body")
        mock_content.assert_called_once()
        mock_title.assert_called_once()