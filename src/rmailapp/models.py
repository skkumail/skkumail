from django.contrib.auth.models import User
from django.db import models


class Email(models.Model):
    uid = models.CharField(max_length=100)
    subject = models.CharField(max_length=255)
    sender = models.CharField(max_length=255)
    recipient = models.CharField(max_length=255)
    date = models.DateTimeField()
    body = models.TextField()
    objects = models.Manager()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_id')

    class Meta:
        unique_together = ('uid', 'user')

    def __str__(self):
        return f"From: {self.sender}, To: {self.recipient}, Subject: '{self.subject}', Date: {self.date}"
