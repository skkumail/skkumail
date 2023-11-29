from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_protect

from comm.mailai_smtp import verify_smtp_credentials
from comm.smtp_crypto import encrypt_smtp_password, decrypt_smtp_password
from .forms import SignupForm, LoginForm, PasswordConfirmationForm
from .models import UserProfile


@csrf_protect
# Home page
def index(request):
    return render(request, 'index.html')


@csrf_protect
# signup page
def user_signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            email = str(form.cleaned_data['email'])
            encrypted_password = encrypt_smtp_password(form.cleaned_data['smtp_password'])
            is_valid_credentials = verify_smtp_credentials(email=email,
                                                           smtp_password=decrypt_smtp_password(encrypted_password))
            if is_valid_credentials:
                user.email = email
                user.save()
                UserProfile.objects.create(user=user, encrypted_smtp_password=encrypted_password)
                return redirect('login')
            else:
                form.add_error('smtp_password', 'Invalid SMTP credentials')
    else:
        form = SignupForm()
    return render(request, 'signup.html', {'form': form})


@csrf_protect
def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user:
                login(request, user)
                return redirect('home')
            else:
                messages.error(request, 'Invalid username or password')
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})


@csrf_protect
@login_required
# logout page
def user_logout(request):
    logout(request)
    return redirect('login')


@csrf_protect
@login_required
def delete_account(request):
    if request.method == 'POST':
        password_form = PasswordConfirmationForm(request.POST)
        if password_form.is_valid():
            user = request.user
            password = password_form.cleaned_data['password']
            auth_user = authenticate(username=user.username, password=password)
            if auth_user:
                user.delete()
                logout(request)
                messages.success(request, 'Your account has been successfully deleted.')
                return redirect('login')
            else:
                messages.error(request, 'Password is incorrect.')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        password_form = PasswordConfirmationForm()
    return render(request, 'delete_account.html', {'password_form': password_form})