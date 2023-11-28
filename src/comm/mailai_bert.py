from django.conf import settings
from keybert import KeyBERT


def extract_n_keywords(text: str, num_keywords: int) -> list:
    kw_model: KeyBERT = settings.KW_MODEL_INSTANCE
    result = kw_model.extract_keywords(docs=text, top_n=num_keywords)
    print(result)
    for keyword in result:
        print(keyword)
    return result


def extract_keywords(text: str) -> str:
    num_keywords: int = 5
    keywords: list = extract_n_keywords(text=text, num_keywords=num_keywords)

    # Assuming keywords = kw_model.extract_keywords(doc, top_n=num_keywords) is already executed

    # Start of the HTML document
    html_content = "<!DOCTYPE html>"
    html_content += "<html lang='en'>"
    html_content += "<head>"
    html_content += "<meta charset='UTF-8'>"
    html_content += "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
    html_content += "<title>Keyword Analysis</title>"
    # Bootstrap CSS CDN
    html_content += ("<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap"
                     ".min.css'>")
    html_content += "</head>"
    html_content += "<body>"
    html_content += "<div class='container mt-4'>"

    # Creating a table with Bootstrap classes for keywords
    html_table = "<table class='table table-bordered table-hover'>"
    html_table += "<thead class='thead-dark'><tr><th>Keyword</th><th>Score</th></tr></thead>"
    html_table += "<tbody>"

    for keyword, score in keywords:
        html_table += f"<tr><td>{keyword}</td><td>{score:.2f}</td></tr>"

    html_table += "</tbody></table>"

    # Adding the table to the HTML content
    html_content += html_table
    html_content += "</div>"  # Closing the container div

    # Bootstrap JS, Popper.js, and jQuery
    html_content += "<script src='https://code.jquery.com/jquery-3.3.1.slim.min.js'></script>"
    html_content += "<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'></script>"
    html_content += "<script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'></script>"

    # End of the HTML document
    html_content += "</body>"
    html_content += "</html>"

    return html_content



