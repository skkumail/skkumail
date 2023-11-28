import requests
from django.conf import settings

from authapp.models import User

# Set your OpenAI API key and model
openai_api_key = settings.OPENAI_API_KEY
openai_model = settings.OPENAI_MODEL
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {openai_api_key}"
}
url = "https://api.openai.com/v1/chat/completions"
system_role_content = {
    "role": "system",
    "content": "You are an expert in crafting professional business emails. Your task is to compose emails that are "
               "clear, concise, and appropriate for a business setting. Focus solely on the email body, ensuring it "
               "directly addresses the given points. Avoid any superfluous language, summaries, greetings, "
               "or sign-offs. you must make it plane text with new proper new lines and indents format so that it can "
               "handled with mail server. You must add Dear .. and at the end Best Regards, .. and You must use default "
               "Sender's name from Sender's First Name, and Sender's Last Name."
}

system_role_title = {
    "role": "system",
    "content": "You are an expert in crafting professional business emails. Your task is to cdy, ensuring it directly "
               "addresses the given points. Avoid any superfluous language, summaries, greetings, or sign-offs. "
               "emails that are clear, concise, and appropriate for a business setting. Focus solely on the email "
               "subject that will be used in smtp email message."
}


def get_mail_content_generator_prompt(user_id: str, name: str, relation: str, style: str, text: str) -> str:
    user: User = User.objects.get(id=user_id)
    first_name: str = user.first_name
    last_name: str = user.last_name

    return (f"Please consider all the following details "
            f"Sender's First Name is {first_name}, "
            f"Sender's Last Name is {last_name}, "
            f"when writing a business email. The recipient's name is {name}, "
            f"and our relationship is {relation}. "
            f"The email should be written in a {style} tone. "
            f"Please include the following content in the email:\n{text}")


def get_mail_title_generator_prompt(content: str) -> str:
    # Constructs the prompt for the mail title generator.
    return f"Create a professional email subject line about '{content}'."


def generate_mail_title(content: str) -> str:
    prompt = get_mail_title_generator_prompt(content)
    user_role_title = {"role": "user", "content": prompt}
    data = {
        "model": openai_model,
        "messages": [system_role_title, user_role_title],
        "temperature": 0.7
    }

    response = requests.post(url=url, headers=headers, json=data)
    response.raise_for_status()

    result = response.json()
    return str(result.get('choices', [{}])[0].get('message', {}).get('content', '')).strip()


def generate_mail_content(user_id: str, name: str, relation: str, style: str, text: str) -> str:
    prompt = get_mail_content_generator_prompt(user_id, name, relation, style, text)
    user_role_content = {"role": "user", "content": prompt}
    data = {
        "model": openai_model,
        "messages": [system_role_content, user_role_content],
        "temperature": 0.7
    }

    response = requests.post(url=url, headers=headers, json=data)
    response.raise_for_status()

    result = response.json()
    return "\n" + str(result.get('choices', [{}])[0].get('message', {}).get('content', '')).strip()


system_role_summarize \
    = {"role": "system",
       "content": "Your primary function is to summarize text provided by users. You analyze the input text, "
                  "extract key information, themes, and main points, and then present a concise summary that retains "
                  "the core message of the original text. Your summarization should be accurate, coherent, "
                  "and focused, ensuring that the essential elements of the text are captured in a more succinct "
                  "form. Do not Add 'Summary:' or something. transform it into compressed and readable short text "
                  "make readable and short compressed format. Add Bootstrap with beautiful layout and indentations", }


def get_summarize_prompt(text: str):
    prompt = (f"Please provide a summary with highly structured format without Summary: or some header with "
              f"bootstrap beautifully with make readable of the following article: [{text}]")
    return prompt


def summarize(text: str) -> str:
    prompt = get_summarize_prompt(text=text)
    user_role_summarize = {"role": "user", "content": prompt}
    data = {
        "model": openai_model,
        "messages": [system_role_summarize, user_role_summarize],
        "temperature": 0.7
    }

    response = requests.post(url=url, headers=headers, json=data)
    response.raise_for_status()

    result = response.json()
    return "\n" + str(result.get('choices', [{}])[0].get('message', {}).get('content', '')).strip()
