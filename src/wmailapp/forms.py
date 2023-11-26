# forms.py

from django import forms


class GenerateMailForm(forms.Form):
    name = forms.CharField(max_length=100)
    relation = forms.CharField(max_length=100)
    style = forms.CharField(max_length=100)
    text = forms.CharField(widget=forms.Textarea)


class SendMailForm(forms.Form):
    recipient = forms.EmailField()
    subject = forms.CharField(max_length=100)
    message = forms.CharField(widget=forms.Textarea)
