# forms.py

from django import forms


class GenerateMailForm(forms.Form):
    name = forms.CharField(max_length=100, help_text='Enter the recipient\'s name. (e.g. Yosep Kim)')
    relation = forms.CharField(max_length=100, help_text='Describe your relationship with the recipient. (e.g. CEO)')
    style = forms.CharField(max_length=100, help_text='Choose the tone of the email. (e.g. formal)')
    text = forms.CharField(widget=forms.Textarea, help_text='Enter the main content of the mail. (e.g. Give me money.)')


class SendMailForm(forms.Form):
    recipient = forms.EmailField(help_text='recipient@example.com')
    subject = forms.CharField(max_length=100, help_text='Auto Generated. You can edit it before sending')
    message = forms.CharField(widget=forms.Textarea, help_text='Auto Generated. You can edit it before sending.')
