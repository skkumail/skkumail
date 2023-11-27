from django.contrib.auth.models import User
from django.db import models
from django_cryptography.fields import encrypt


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    encrypted_smtp_password = encrypt(models.CharField(max_length=100))

    objects = models.Manager()
