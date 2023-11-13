from django.urls import path
from users.views import SendmailView, ChatgptView, ShowmailView, LoginView, RegisterView
app_name = 'users'

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('sendmail/', SendmailView.as_view(), name='sendmail'),
    path('chatgpt/', ChatgptView.as_view(), name='chatgpt'),
    path('showmailview/', ShowmailView.as_view(), name='showmailview'),

] 