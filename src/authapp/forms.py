from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import UserProfile
from comm.smtp_crypto import encrypt_smtp_password


class SignupForm(UserCreationForm):
    first_name = forms.CharField(max_length=30, required=True, help_text='Required.')
    last_name = forms.CharField(max_length=30, required=True, help_text='Required.')
    email = forms.EmailField(required=True)
    smtp_password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password1', 'password2', 'smtp_password']

    def save(self, commit=True):
        user = super(SignupForm, self).save(commit=False)
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
            # Assuming you have a UserProfile model that stores the encrypted SMTP password
            user_profile = UserProfile(user=user)
            user_profile.encrypted_smtp_password = encrypt_smtp_password(self.cleaned_data['smtp_password'])
            user_profile.save()
        return user


class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)


class PasswordConfirmationForm(forms.Form):
    password = forms.CharField(widget=forms.PasswordInput)

    def clean_password(self):
        # You can add custom password validation here if needed
        return self.cleaned_data['password']
