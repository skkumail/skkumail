from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_protect

from utils.smtp_crypto import encrypt_smtp_password, decrypt_smtp_password
from .forms import SignupForm, LoginForm
from .models import UserProfile
from .signup_tools import verify_smtp_credentials


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
            user.email = form.cleaned_data['email']
            encrypted_password = encrypt_smtp_password(form.cleaned_data['smtp_password'])
            is_valid_credentials = verify_smtp_credentials(user.email, decrypt_smtp_password(encrypted_password))
            if is_valid_credentials:
                user.save()  # Save the User model
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
                # Adding an error message when authentication fails
                messages.error(request, 'Invalid username or password')
        # If the form is not valid, the form will be passed to the template with errors
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
        user = request.user
        user.delete()
        logout(request)
        messages.success(request, 'Your account has been successfully deleted.')
        return redirect('login')  # Redirect to the home page or a page confirming account deletion
    else:
        return render(request, 'delete_account.html')  # A template that confirms account deletion
