import base64
from typing import Callable

from bs4 import BeautifulSoup
from langdetect import detect, LangDetectException


def process_email_to_include_base64_images(email_message):
    body = email_message.html or email_message.text
    soup = BeautifulSoup(body, 'html.parser')

    for attachment in email_message.attachments:
        if attachment.content_type.split('/')[0] == 'image':
            base64_image = base64.b64encode(attachment.payload).decode()
            image_data_uri = f"data:{attachment.content_type};base64,{base64_image}"

            for img_tag in soup.find_all('img'):
                if attachment.filename in img_tag['alt']:
                    img_tag['src'] = image_data_uri
    # HTML을 String으로 반환
    return str(soup)


def text_to_beautiful_soup(text: str) -> BeautifulSoup:
    if '<html>' in text.lower():
        soup = BeautifulSoup(text, 'html.parser')
    else:
        soup = BeautifulSoup(f"<html><body>{text}</body></html>", 'html.parser')
    return soup


def modify_base64_encoded_text_content(text: str, modification_function: Callable[[str], str]) -> str:
    soup: BeautifulSoup = text_to_beautiful_soup(text=text)
    img_tags = soup.find_all('img')
    placeholders = []
    for i, img in enumerate(img_tags):
        placeholder = soup.new_tag('p')
        placeholder.string = f""
        img.replace_with(placeholder)
        placeholders.append((placeholder, img))

    plane_text = soup.get_text(separator='\n', strip=True)
    try:
        detected_language = detect(plane_text)
        if detected_language != 'en':
            return f"""
            <div class="alert alert-info" role="alert" style="font-size: 1.5rem;">
                Text is not in English.<br><br>
                Detected language: {detected_language}
            </div>
            """
    except LangDetectException as e:
        # Handling the case where no features are detected (e.g., empty text)
        if str(e) == "No features in text.":
            return f"""
            <div class="alert alert-info" role="alert" style="font-size: 1.5rem;">
                Empty Email.
            </div>
            """
        else:
            return f"""
            <div class="alert alert-info" role="alert" style="font-size: 1.5rem;">
                Language detection error: {str(e)}
            </div>
            """

    if len(plane_text) > 2048:
        plane_text = plane_text[:2048]
    modified_body: str = modification_function(plane_text)
    modified_soup: BeautifulSoup = text_to_beautiful_soup(text=modified_body)
    return str(modified_soup)


def get_combined_body(body1: str, body2: str, description: str) -> str:
    soup1 = BeautifulSoup("<html></html>", "html.parser")
    description_tag = soup1.new_tag("h1")
    description_tag.string = f"[{description}]"
    soup1.append(description_tag)
    soup1.append(text_to_beautiful_soup(body1))
    soup2 = text_to_beautiful_soup(body2)

    soup1.append(soup1.new_tag("br"))
    soup1.append(soup1.new_tag("hr"))
    soup1.append(soup1.new_tag("br"))

    original_mail_tag = soup1.new_tag("h1")
    original_mail_tag.string = "[Original Mail]"
    soup1.append(original_mail_tag)

    for element in soup2.children:
        soup1.append(element)

    return str(soup1)
