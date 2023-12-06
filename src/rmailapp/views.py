from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from django.views.decorators.csrf import csrf_protect

from comm.mailai_base64 import modify_base64_encoded_text_content, get_combined_body
from comm.mailai_bert import extract_keywords, summarize as bert_summarize
from comm.mailai_google import translate
from comm.mailai_gpt import summarize
from comm.mailai_gpt import translate as llm_translate
from comm.mailai_imap import fetch_emails
from .models import Email


# Your modification functions
def translate_email(body: str) -> str:
    body2 = body
    body1 = str(modify_base64_encoded_text_content(
        text=body, modification_function=translate))
    return get_combined_body(body1=body1, body2=body2, description="Translated Mail (Google)")


def llm_translate_email(body: str) -> str:
    body2 = body
    body1 = str(modify_base64_encoded_text_content(
        text=body, modification_function=llm_translate))
    return get_combined_body(body1=body1, body2=body2, description="Translated Mail (OpenAI)")


def summarize_email(body: str) -> str:
    body2 = body
    body1 = str(modify_base64_encoded_text_content(
        text=body, modification_function=summarize))
    return get_combined_body(body1=body1, body2=body2, description="Summarized Mail (OpenAI)")


def bert_summarize_email(body: str) -> str:
    body2 = body
    body1 = str(modify_base64_encoded_text_content(
        text=body, modification_function=bert_summarize))
    return get_combined_body(body1=body1, body2=body2, description="Summarized Mail (BERT)")


def extract_keyword_email(body):
    body2 = body
    body1 = str(modify_base64_encoded_text_content(
        text=body, modification_function=extract_keywords))
    return get_combined_body(body1=body1, body2=body2, description="Extracted Keywords")


@login_required
@csrf_protect
def email_detail(request, email_id):
    email = get_object_or_404(Email, pk=email_id)
    modified_body = None

    if request.method == 'POST':
        body = email.body
        modification_type = request.POST.get('modify')

        if modification_type == 'translation':
            modified_body = translate_email(body)
        elif modification_type == 'summary':
            modified_body = summarize_email(body)
        elif modification_type == 'bert_summary':
            modified_body = bert_summarize_email(body)
        elif modification_type == 'keyword':
            modified_body = extract_keyword_email(body)
        elif modification_type == 'llm_translation':
            modified_body = llm_translate_email(body)
        elif modification_type == 'original':
            modified_body = body

        return render(request, 'email_detail.html', {'email': email, 'modified_body': modified_body})

    return render(request, 'email_detail.html', {'email': email})


@login_required
@csrf_protect
def show_emails(request):

    email_objects = Email.objects.filter(user_id=request.user.id).order_by('-date')

    per_page = request.GET.get('per_page', 10)
    paginator = Paginator(email_objects, per_page)

    page = request.GET.get('page')
    try:
        emails = paginator.page(page)
    except PageNotAnInteger:
        emails = paginator.page(1)
    except EmptyPage:
        emails = paginator.page(paginator.num_pages)

    return render(request, 'show_emails.html', {'emails': emails, 'per_page': int(per_page)})


@login_required
@csrf_protect
def handle_emails(request):
    if request.method == "POST":
        if 'fetch' in request.POST:
            if fetch_emails(user_id=request.user.id, max_emails=100, mark_seen=False):
                return HttpResponseRedirect(reverse('show_emails'))
            else:
                return HttpResponse("Failed to fetch emails. Please check the logs.")

        elif 'reset' in request.POST:
            Email.objects.filter(user_id=request.user.id).delete()
            return HttpResponseRedirect(reverse('show_emails'))

    return render(request, 'handle_emails.html')
