from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User

from rmailapp.models import Email


class EmailModelTests(TestCase):
    """
    __str__ 메서드가 사람이 읽을 수 있는 형태인지 간단 확인
    """

    def test_str_representation(self):
        user = User.objects.create_user("u", password="p")
        mail = Email.objects.create(
            uid="123",
            subject="Hi",
            sender="a@b.com",
            recipient="c@d.com",
            date="2024-01-01T00:00Z",
            body="body",
            user=user,
        )
        self.assertIn("Subject: 'Hi'", str(mail))


class ShowEmailsViewTests(TestCase):
    """
    로그인한 사용자가 자신의 메일목록을 볼 때
    1) 200 OK
    2) 페이지네이션 동작 여부
    """

    def setUp(self):
        self.user = User.objects.create_user("u", password="p")
        # 15 통보 → 10 개씩 보이도록 페이징
        Email.objects.bulk_create(
            Email(
                uid=f"uid{i}",
                subject=f"S{i}",
                sender="a@b.com",
                recipient="c@d.com",
                date="2024-01-01T00:00Z",
                body="body",
                user=self.user,
            )
            for i in range(15)
        )

    def test_pagination(self):
        c = Client()
        c.login(username="u", password="p")
        resp = c.get(reverse("show_emails"), {"per_page": 10})
        self.assertEqual(resp.status_code, 200)
        # 첫 페이지에는 10 개, 두번째 페이지에는 5 개
        self.assertEqual(len(resp.context["emails"]), 10)
        resp2 = c.get(reverse("show_emails") + "?page=2&per_page=10")
        self.assertEqual(len(resp2.context["emails"]), 5)
