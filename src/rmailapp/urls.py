from django.urls import path

from .views import handle_emails, show_emails, email_detail

urlpatterns = [
    path('show-emails/', show_emails, name='show_emails'),
    path('emails/<int:email_id>/', email_detail, name='email_detail'),
    path('handle-emails/', handle_emails, name='handle_emails'),
]

