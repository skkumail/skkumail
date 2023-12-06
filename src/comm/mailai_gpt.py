import requests
from django.conf import settings

from authapp.models import User

openai_api_key = settings.OPENAI_API_KEY
openai_model = settings.OPENAI_MODEL
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {openai_api_key}"
}
url = "https://api.openai.com/v1/chat/completions"

system_role_content = {
    "role": "system",
    "content": "You are a GPT-based assistant tasked with writing an email. Do not add 'Subject:' or somethings."

}

system_role_title = {
    "role": "system",
    "content": "You are a GPT-based assistant specialized in creating professional email subject lines."
}

system_role_summarize = {
    "role": "system",
    "content": "You are a GPT-based assistant specialized in summarize email contents."
}

system_role_translate = {
    "role": "system",
    "content": f"You are a GPT-based assistant specialized in translating email."
}


def get_mail_content_generator_prompt(user_id: str, name: str, relation: str, style: str, text: str) -> str:
    user: User = User.objects.get(id=user_id)
    first_name: str = user.first_name
    last_name: str = user.last_name

    prompt = (
        f"TASK: Please follow these steps:\n"
        f"  1. The sender of the email is {first_name} {last_name}. "
        f"  2. The recipient of the email is {name}, and the relationship with the sender is {relation}.\n"
        f"  3. Write the email in a {style} tone.\n"
        f"  4. Include the following content in the email: ```{text}```\n"
        f"Ensure the email is appropriately adjusted to reflect the relationship and tone.\n\n"
        f"EXAMPLE: If the sender is John Doe, the recipient is Jane Smith, their relationship is colleague, "
        f"and the style is formal, then an example content might be: ```Dear Jane, ...```\n\n"
        f"OUTPUT: Return only plain text without html, markdown, json, or anything similar.\n\n"
    )
    return prompt


def get_mail_title_generator_prompt(content: str) -> str:
    prompt = (
        f"TASK: Generate a compelling and professional subject line for an email that discusses the following topic:\n"
        f"  '{content}'\n\n"
        f"EXAMPLE: If the email content is about a 'new product launch', a possible subject line might be: "
        f"'Exciting News: Introducing Our Latest Innovative Product!'\n\n"
        f"OUTPUT: The subject line should be concise and relevant to the content. Return only plain text without "
        f"html, markdown, json, or anything similar.\n\n"
    )
    return prompt


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


def get_summarize_prompt(text: str) -> str:
    prompt = (
        f"TASK: Summarize the provided text using GPT-based expertise. Aim for a concise, clear summary that captures "
        f"the core ideas. Avoid adding headers or excessive formatting.\n\n"
        f"TEXT: '{text}'\n\n"
        f"OUTPUT: Create summary, focusing on clarity and brevity. Structure the summary with bullet points, "
        f"Ensure that the summary is readable, structured, and emphasizes the main ideas of the text without "
        f"unnecessary details."
    )

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
    return ("\n" + str(result.get('choices', [{}])[0].get('message', {}).
                      get('content', '')).strip().replace('\n', '<br>'))


def get_translator_prompt(text: str, target_language: str) -> str:
    prompt = (
        f"TASK: Do the following steps:\n"
        f"  1. correct spelling and grammatical mistakes of the text. "
        f"  2. translate the text to the language {target_language}. "
        f"INPUT: the email input: ```{text}```"
        f"     Do not interpret or change the text. The result should be a straight translation of the text.\n"
        f"EXAMPLE: input: ```Das ist ein Hund```; ```Deutsch```; ```child``` \n"
        f"  output: ```This is a dog\n```"
        f"OUTPUT: Only return plain text without html, markdown, json, or something. and just translated text only.\n\n"
    )
    return prompt


def translate(text: str) -> str:
    prompt = get_translator_prompt(text=text, target_language='Korean')
    user_role_summarize = {"role": "user", "content": prompt}
    data = {
        "model": openai_model,
        "messages": [system_role_translate, user_role_summarize],
        "temperature": 0.7
    }

    response = requests.post(url=url, headers=headers, json=data)
    response.raise_for_status()

    result = response.json()
    return ("\n" + str(result.get('choices', [{}])[0].get('message', {}).get('content', ''))
            .strip().replace('\n', '<br>'))
