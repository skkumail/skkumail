from keybert import KeyBERT
import time

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

start_time = time.time()

kw_model = KeyBERT()
keywords = kw_model.extract_keywords(
    email_content, keyphrase_ngram_range=(2, 4), use_maxsum=True, top_n=5
)

end_time = time.time()

print("키워드 추출에 걸린 시간:", end_time - start_time, "초")
print("추출된 키워드:", keywords)
