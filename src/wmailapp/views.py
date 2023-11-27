# views.py
# views.py

from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_protect

from utils.mailai_smtp import generate_mail_content, send_mail
from .forms import GenerateMailForm, SendMailForm


@csrf_protect
@login_required
def mail_process_view(request):
    # Handle initial form for generating mail
    if request.method == 'GET':
        generate_form = GenerateMailForm()
        send_form = SendMailForm()
        return render(request, 'mail_process.html', {'generate_form': generate_form, 'send_form': send_form})

    # Handle form submission for generating mail
    if 'generate_mail' in request.POST:
        generate_form = GenerateMailForm(request.POST)
        if generate_form.is_valid():
            name = generate_form.cleaned_data['name']
            relation = generate_form.cleaned_data['relation']
            style = generate_form.cleaned_data['style']
            text = generate_form.cleaned_data['text']
            content = generate_mail_content(name, relation, style, text)
            # Re-render the same page with the send form pre-filled
            send_form = SendMailForm(initial={'message': content})
            return render(request, 'mail_process.html', {'generate_form': generate_form, 'send_form': send_form, 'content': content})

    # Handle form submission for sending mail
    if 'send_mail' in request.POST:
        send_form = SendMailForm(request.POST)
        if send_form.is_valid():
            recipient = send_form.cleaned_data['recipient']
            subject = send_form.cleaned_data['subject']
            message = send_form.cleaned_data['message']
            send_mail(request.user.id, recipient, subject, message)
            # Redirect or display a success message after sending the mail
            #return redirect(reverse('mail_sent'))
            #return JsonResponse({'status': 'success', 'message': 'Email sent successfully.'})
            #return redirect("{% url 'generate_mail' %}", email_sent=True)
            return redirect(reverse('generate_mail') + '?email_sent=True')

        # Add a context variable to indicate email sending status
        email_sent = request.GET.get('email_sent', False)
        return render(request, 'mail_process.html', {
            'generate_form': GenerateMailForm(),
            'send_form': SendMailForm(),
            'email_sent': email_sent
        })


    return render(request, 'mail_process.html', {'generate_form': GenerateMailForm(), 'send_form': SendMailForm()})