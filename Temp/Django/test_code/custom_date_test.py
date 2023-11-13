import spacy
from spacy.matcher import Matcher
from spacy.tokens import Span
from spacy.language import Language

nlp = spacy.load("en_core_web_sm")

# 사용자 정의 엔터티를 정의
matcher = Matcher(nlp.vocab)
pattern = [
    {
        "LOWER": {
            "in": [
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday",
                "sunday",
            ]
        }
    },
    {"LOWER": ","},
    {
        "LOWER": {
            "in": [
                "january",
                "february",
                "march",
                "april",
                "may",
                "june",
                "july",
                "august",
                "september",
                "october",
                "november",
                "december",
            ]
        }
    },
    {
        "LOWER": {
            "in": [
                "1st",
                "2nd",
                "3rd",
                "4th",
                "5th",
                "6th",
                "7th",
                "8th",
                "9th",
                "10th",
                "11th",
                "12th",
                "13th",
                "14th",
                "15th",
                "16th",
                "17th",
                "18th",
                "19th",
                "20th",
                "21st",
                "22nd",
                "23rd",
                "24th",
                "25th",
                "26th",
                "27th",
                "28th",
                "29th",
                "30th",
                "31st",
            ]
        }
    },
    {"IS_DIGIT": True},
]

matcher.add("custom_date", [pattern])


@Language.component("custom_date_component")
def custom_date_component(doc):
    matches = matcher(doc)
    spans = [
        Span(doc, match[1], match[2])
        for match_id, start, end in matches
        for match in matches
    ]
    for span in spans:
        span.merge()
    return doc


# 사용자 정의 컴포넌트를 등록
nlp.add_pipe("custom_date_component", before="parser")

# 날짜 인식 테스트
text = """
Subject: Meeting Schedule Confirmation

Dear Jason,

I hope this email finds you well. I wanted to confirm our upcoming meeting scheduled for 4th, July at 14:00-15:00 regarding problem solving room. I'm looking forward to our discussion and collaboration.

To ensure that the meeting goes smoothly, I'd like to confirm a few details:

Date: Monday, November 18th, 2021
Time: 14:00-15:00
Location: problem solving room

Please let me know if the above information is correct, and if there are any changes or adjustments you'd like to make. Additionally, if you have any specific agenda items or topics you'd like to cover during the meeting, please feel free to share them in advance.

If you need to reschedule or if the proposed date and time are not convenient for you, please let me know your availability, and we can work together to find an alternative that works for both of us.

I appreciate your cooperation in this matter and look forward to our productive meeting. If you have any questions or concerns, please don't hesitate to reach out to me.

Thank you, and have a great day!

Best regards,
Sumin
"""
doc = nlp(text)
for ent in doc.ents:
    if ent.label_ == "DATE":
        print("날짜:", ent.text)
