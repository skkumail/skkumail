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

    html_content = "<!DOCTYPE html>"
    html_content += "<html lang='en'>"
    html_content += "<head>"
    html_content += "<meta charset='UTF-8'>"
    html_content += "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
    html_content += "<title>Keyword Analysis</title>"

    html_content += ("<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap"
                     ".min.css'>")
    html_content += "</head>"
    html_content += "<body>"
    html_content += "<div class='container mt-4'>"

    html_table = "<table class='table table-bordered table-hover'>"
    html_table += "<thead class='thead-dark'><tr><th>Keyword</th><th>Score</th></tr></thead>"
    html_table += "<tbody>"

    for keyword, score in keywords:
        html_table += f"<tr><td>{keyword}</td><td>{score:.2f}</td></tr>"

    html_table += "</tbody></table>"

    html_content += html_table
    html_content += "</div>"

    html_content += "<script src='https://code.jquery.com/jquery-3.3.1.slim.min.js'></script>"
    html_content += "<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'></script>"
    html_content += "<script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'></script>"

    html_content += "</body>"
    html_content += "</html>"

    return html_content

def summarize(text:str):

    summary = settings.BERT_SUMMARIZER(text, max_length=140, min_length=30, do_sample=False)
    summary_text = summary[0]['summary_text']

    html_output = f"""
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        Summary
                    </div>
                    <div class="card-body">
                        <p class="card-text">{summary_text}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    """
    return html_output