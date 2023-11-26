# urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('generate_mail/', views.mail_process_view, name='generate_mail'),
]
