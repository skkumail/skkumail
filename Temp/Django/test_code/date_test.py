import spacy
from datetime import datetime

# spaCy 모델 로드
nlp = spacy.load("en_core_web_sm")

# 이메일 내용
email_content = """
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

# spaCy를 사용하여 날짜 정보 추출
doc = nlp(email_content)

# 날짜 정보 추출 및 Datetime 형식으로 정제
for ent in doc.ents:
    print(ent, ent.label_)
    if ent.label_ == "DATE":
        # SpaCy의 날짜 형식은 종종 텍스트 형식입니다. 이를 Datetime 형식으로 변환
        date_str = ent.text
        try:
            date_obj = datetime.strptime(date_str, "%dth, %B")
            print("날짜:", date_obj.strftime("%Y-%m-%d"))
        except ValueError:
            print("날짜 형식을 인식하지 못했습니다:", date_str)
