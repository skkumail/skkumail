from fastapi import FastAPI, HTTPException, Request, Depends
from fastapi.responses import JSONResponse
from keybert import KeyBERT
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from uuid import UUID
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session
import smtplib
from email.mime.text import MIMEText
import openai
from imap_tools import MailBox
import os
from googletrans import Translator
from transformers import BertTokenizer
import numpy as np
from sklearn.cluster import KMeans

app = FastAPI()


# env 필요
origins = ["http://localhost:3000", "http://127.0.0.1:3000"]

FRONTEND_HOST = os.environ.get("FRONTEND_HOST")
FRONTEND_PORT = os.environ.get("FRONTEND_PORT")
if FRONTEND_HOST and FRONTEND_PORT:
    new_origin = f"http://{FRONTEND_HOST}:{FRONTEND_PORT}"
    origins.append(new_origin)

# curl -X GET으로 컨테이너 잘 돌아가는지 체크 용도
if FRONTEND_HOST:
    health_origin = f"http://{FRONTEND_HOST}:80"
    origins.append(new_origin)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB
models.Base.metadata.create_all(bind=engine)


def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

        
def get_api_key() -> str:
    IS_PROD = os.environ.get("IS_PROD", False)
    if not IS_PROD:
        try:
            with open("/home/dori/Desktop/DORI/chatgpt_key.txt", "r") as f:
                OPENAI_API_KEY = f.readline().strip()
        except FileNotFoundError:
            OPENAI_API_KEY = "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"
    else:
        OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY", "")
    return OPENAI_API_KEY
  
class User_info(BaseModel):  
    username:str = Field(min_length=1)
    pw:str = Field(min_length=1)
    email_id:str = Field(min_length=1)
    email_key:str = Field(min_length=1)
    

class User_send_log(BaseModel):  
    username:str = Field(min_length=1)
    receiver:str = Field(min_length=1)
    prompt:str = Field(min_length=1)
    result:str = Field(min_length=1)
    num:int = Field(gt=0)


class User_receive_log(BaseModel):  
    username:str = Field(min_length=1)
    date:str = Field(min_length=1)
    subject:str = Field(min_length=1)
    sender:str = Field(min_length=1)
    contents:str = Field(min_length=1)
    summary:str = Field(min_length=1)
    keyword:str = Field(min_length=1)
    em_keyword:str = Field(min_length=1)
    main_keyword:str = Field(min_length=1)
    main_0:int = Field(gt=-1)
    main_1:int = Field(gt=-1)
    main_2:int = Field(gt=-1)
    main_3:int = Field(gt=-1)
    main_4:int = Field(gt=-1)
    num:int = Field(gt=0)


########################### Keyword Extract #######################
# KeyBERT 모델 로딩
keybert_model = KeyBERT("distilbert-base-nli-mean-tokens")
tokenizer = BertTokenizer.from_pretrained("bert-base-cased")


@app.post("/extract_keywords")
async def extract_keywords(request: Request, db: Session = Depends(get_db)):
    try:
        # JSON 데이터를 추출
        data = await request.json()
        username = data.get("username")
        sender = data.get("sender")
        num = data.get("num")
        temp_user_msg = (
            db.query(models.User_receive_log)
            .filter(
                models.User_receive_log.username == username,
                models.User_receive_log.sender == sender,
                models.User_receive_log.num == int(num),
            )
            .first()
        )

        if temp_user_msg.keyword is not None:
            total_list = eval(temp_user_msg.keyword)

        else:
            email_text = temp_user_msg.contents
            if email_text is None:
                raise HTTPException(
                    status_code=422,
                    detail="Missing 'email_text' field in the request body",
                )
            # KeyBERT를 사용하여 키워드 추출
            keywords = keybert_model.extract_keywords(
                email_text, keyphrase_ngram_range=(1, 1), top_n=5, stop_words="english"
            )

            total_list = []
            for i in range(len(keywords)):
                total_list.append(keywords[i][0])

            temp_user_msg.keyword = str(total_list)
            db.add(temp_user_msg)
            db.commit()

        # 추출된 키워드를 JSON 형식으로 반환
        return JSONResponse({"message": "연결 성공", "data": total_list})
    except Exception as e:
        # 오류가 발생한 경우 500 Internal Server Error 반환
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")


################################ mail_generation #########################
def mail_generator(text, prompt, answer, style, name, relation):
    # api_key는 반드시 반드시 업로드하지 말 것!!!
    # f = open("/home/dori/Desktop/DORI/chatgpt_key.txt", "r")
    # line = f.readline().strip()
    # f.close()
    openai.api_key = get_api_key()

    # 로그 있는 경우 => 로그 기반 few shot learning
    # 로그 없는 경우 => default setting으로 few shot learning
    if prompt:
        prompt = prompt
        answer = answer
        try:
            completion = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "user", "content": prompt},
                    {"role": "assistant", "content": answer},
                    {
                        "role": "user",
                        "content": f"아래 내용을 모두 고려하여 비즈니스 메일을 작성해줘. 상대 이름은 {name}으로 나와는 {relation}이라는 관계야. 메일을 작성할 때는 가독성이 있어야 하며, {style}한 분위기로 작성해야 해. 앞에서 말한 고려사항들을 생각하면서 동시에 반드시 아래 내용을 모두 포함하여 메일을 작성해줘.\n{text}",
                    },
                ],
            )

            return completion.choices[0].message["content"].strip()
        except Exception as e:
            print(e)
            return "error"

    else:
        # assets_path = Path(__file__).resolve().parent / 'assets'
        # prompt_path = assets_path / 'roleplay_prompt.txt'
        # answer_path = assets_path / 'roleplay_answer.txt'
        # with prompt_path.open('r',encoding='UTF8') as f:
        #     prompt = f.read().strip()
        # with answer_path.open('r',encoding='UTF8') as f:
        #     answer = f.read().strip()
        try:
            completion = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {
                        "role": "user",
                        "content": f"아래 내용을 모두 고려하여 비즈니스 메일을 작성해줘. 상대 이름은 {name}으로 나와는 {relation}이라는 관계야. 메일을 작성할 때는 가독성이 있어야 하며, {style}한 분위기로 작성해야 해. 앞에서 말한 고려사항들을 생각하면서 동시에 반드시 아래 내용을 모두 포함하여 메일을 작성해줘.\n{text}",
                    }
                ],
            )
            return completion.choices[0].message["content"].strip()
        except Exception as e:
            return "error"


# 메일 작성 부분 - with ChatGPT
@app.post("/chatgpt")
async def chatgpt_mail_generate(request: Request, db: Session = Depends(get_db)):
    try:
        data = await request.json()
        contents = data.get("contents")
        # 동일한 상대에게 보냈던 메일로 few shot learning -> 그냥 동일한 카테고리(이건 어찌 분류?) 정도로 해도 괜찮을 듯...
        username = data.get("username")
        sendaddr = data.get("send_address")
        style = data.get("style")
        name = data.get("name")
        relation = data.get("relation")

        pre_contents = (
            db.query(models.User_send_log)
            .filter(
                models.User_send_log.username == username,
                models.User_send_log.receiver == sendaddr,
            )
            .all()
        )

        if len(pre_contents) == 0:
            chatgpt_infer = mail_generator(contents, None, None, style, name, relation)

        else:
            pre_prompt = chatgpt_infer[-1].prompt
            pre_contents = chatgpt_infer[-1].result

            chatgpt_infer = mail_generator(
                contents, pre_prompt, pre_contents, style, name, relation
            )

        if chatgpt_infer == "error":
            return JSONResponse({"message": "chatgpt error"})

        return JSONResponse({"message": "연결 성공", "data": chatgpt_infer})

    except Exception as e:
        return JSONResponse({"message": str(e)})


############################## send email #######################
@app.post("/sendmail")
async def send_email(request: Request, db: Session = Depends(get_db)):
    try:
        data = await request.json()
        username = data.get("username")
        head = data.get("head")
        text = data.get("text")
        address = data.get("address")
        prompt = data.get("prompt")

        temp_user = (
            db.query(models.User_info)
            .filter(models.User_info.username == username)
            .first()
        )
        email_id = temp_user.email_id
        password = temp_user.email_key

        smtp = smtplib.SMTP("smtp.gmail.com", 587)
        smtp.ehlo()
        smtp.starttls()
        smtp.login(email_id, password)

        msg = MIMEText(text)  # 본문
        msg["Subject"] = head  # 제목
        smtp.sendmail(email_id, address, msg.as_string())
        smtp.quit()

        temp_user = (
            db.query(models.User_send_log)
            .filter(
                models.User_send_log.username == username,
                models.User_send_log.receiver == address,
            )
            .all()
        )
        temp_num = len(temp_user)
        temp_user = models.User_send_log()
        temp_user.username = username
        temp_user.receiver = address
        temp_user.prompt = prompt
        temp_user.result = text
        temp_user.num = temp_num + 1

        db.add(temp_user)
        db.commit()

        return JSONResponse({"message": "전송 성공"})

    except Exception as e:
        return HTTPException(status_code=422, detail=f"An error occurred: {str(e)}")


########################### register ###############################3
@app.post("/register")
async def register(request: Request, db: Session = Depends(get_db)):
    data = await request.json()
    username = data.get("username")
    password = data.get("password")
    password_config = data.get("password_config")
    gmail_id = data.get("gmail_id")
    gmail_key = data.get("gmail_key")

    temp_user_info = (
        db.query(models.User_info).filter(models.User_info.username == username).all()
    )
    if len(temp_user_info) != 0:
        return JSONResponse({"message": "duplicated id"})

    if password != password_config:
        return JSONResponse({"message": "비밀번호 불일치"})

    try:
        smtp = smtplib.SMTP("smtp.gmail.com", 587)
        smtp.ehlo()
        smtp.starttls()
        smtp.login(gmail_id, gmail_key)
        smtp.quit()
    except:
        return JSONResponse({"message": "이메일 인증 실패"})

    try:
        temp_user = models.User_info()
        temp_user.username = username
        temp_user.pw = password
        temp_user.email_id = gmail_id
        temp_user.email_key = gmail_key
        db.add(temp_user)
        db.commit()
        return JSONResponse({"message": "회원가입 성공"})

    except:
        return JSONResponse({"message": "회원가입 실패"})


################################ Login #############################
@app.post("/login")
async def login(request: Request, db: Session = Depends(get_db)):
    data = await request.json()
    username = data.get("username")
    password = data.get("password")
    temp_user_info = (
        db.query(models.User_info)
        .filter(models.User_info.username == username, models.User_info.pw == password)
        .first()
    )
    print(temp_user_info)
    if temp_user_info is not None:
        return JSONResponse({"message": "로그인이 완료되었습니다.", "data": username})
    else:
        return HTTPException(status_code=422, detail="로그인에 실패하였습니다.")


################################# Summary ############################
def mail_summary(text):
    openai.api_key = get_api_key() 

    # 로그 있는 경우 => 로그 기반 few shot learning
    # 로그 없는 경우 => default setting으로 few shot learning

    try:
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "user",
                    "content": f"Summarize the email below with a key focus and summarize it easily at a glance. At this time, make sure you don't miss the necessary date and core, and write the sentences in a modified format so that they aren't long and summarize them.\n{text}",
                }
            ],
        )
        return completion.choices[0].message["content"].strip()
    except Exception as e:
        return "error"


@app.post("/summarize")
async def chatgpt_mail_summarize(request: Request, db: Session = Depends(get_db)):
    try:
        data = await request.json()
        username = data.get("username")
        sender = data.get("sender")
        num = data.get("num")
        temp_user_msg = (
            db.query(models.User_receive_log)
            .filter(
                models.User_receive_log.username == username,
                models.User_receive_log.sender == sender,
                models.User_receive_log.num == int(num),
            )
            .first()
        )

        if temp_user_msg.summary is not None:
            return JSONResponse({"message": "연결 성공", "data": temp_user_msg.summary})

        chatgpt_infer = mail_summary(temp_user_msg.contents)

        if chatgpt_infer == "error":
            return JSONResponse({"message": "chatgpt error"})
        else:
            temp_user_msg.summary = chatgpt_infer
            db.add(temp_user_msg)
            db.commit()

        return JSONResponse({"message": "연결 성공", "data": chatgpt_infer})

    except Exception as e:
        return JSONResponse({"message": str(e)})


###################################### Show email ############################
@app.post("/showmail")
async def show_mail(request: Request, db: Session = Depends(get_db)):
    try:
        data = await request.json()
        username = data.get("username")

        temp_user = (
            db.query(models.User_info)
            .filter(models.User_info.username == username)
            .first()
        )
        print(temp_user.email_key)
        email_id = temp_user.email_id
        email_key = temp_user.email_key

        mailbox = MailBox("imap.gmail.com", 993)
        mailbox.login(email_id, email_key, initial_folder="INBOX")

        for msg in mailbox.fetch(limit=False, reverse=False):

            temp_user_msg = (
                db.query(models.User_receive_log)
                .filter(
                    models.User_receive_log.username == username,
                    models.User_receive_log.sender == msg.from_,
                    models.User_receive_log.date == str(msg.date),
                )
                .first()
            )
            if temp_user_msg is not None:
                continue
            else:
                temp_num = len(
                    db.query(models.User_receive_log)
                    .filter(
                        models.User_receive_log.username == username,
                        models.User_receive_log.sender == msg.from_,
                    )
                    .all()
                )
                temp_receive_mail = models.User_receive_log()
                temp_receive_mail.username = username
                temp_receive_mail.date = msg.date
                temp_receive_mail.subject = msg.subject
                temp_receive_mail.sender = msg.from_
                temp_receive_mail.contents = msg.text

                temp_receive_mail.num = temp_num+1
                # KeyBERT를 사용하여 키워드 추출
                keywords = keybert_model.extract_keywords(
                    msg.text, keyphrase_ngram_range=(1, 1), top_n = 5, stop_words="english"
                )

                keyword_total_list = []
                keyword_encoded_total_list = []
                for i in range(len(keywords)):
                    keyword_total_list.append(keywords[i][0])
                    sequence = keywords[i][0]
                    inputs = tokenizer(sequence)
                    encoded_sequence = inputs["input_ids"]
                    temp_sequence = np.array(encoded_sequence)
                    temp_encoded_sequence = temp_sequence[(temp_sequence != 0) & (temp_sequence != 100) & (temp_sequence != 101) & (temp_sequence != 102) & (temp_sequence != 103)].tolist()
                    keyword_encoded_total_list += temp_encoded_sequence

                temp_receive_mail.keyword = str(keyword_total_list)
                temp_receive_mail.em_keyword = str(keyword_encoded_total_list)
                
                db.add(temp_receive_mail)
                db.commit()
        mailbox.logout()

        total_list = []

        for temp_item in (
            db.query(models.User_receive_log)
            .filter(models.User_receive_log.username == username)
            .all()
        ):
            total_list.append(
                [
                    temp_item.date,
                    temp_item.subject,
                    temp_item.sender,
                    temp_item.contents,
                    temp_item.num,
                ]
            )

        return JSONResponse({"message": "연결 성공", "data": total_list})


    except Exception as e:
        return JSONResponse({"message": "연결 fail", "data": str(e)})


################################ Translate ###########################
@app.post("/translate")
async def translate_text(request: Request, db: Session = Depends(get_db)):
    try:
        data = await request.json()

        pre_text = data.get("contents")

        translator = Translator()
        result = translator.translate(pre_text, dest="ko").text

        return JSONResponse({"message": "연결 성공", "data": result})

    except Exception as e:
        return JSONResponse({"message": "연결 fail", "data": str(e)})


################################ Tokenizer ###########################
@app.post("/main_keyword")
async def incode_keyword(request: Request, db: Session=Depends(get_db)):
    try:
        data = await request.json()

        username = data.get('username')
        
        temp_user_msg = db.query(models.User_receive_log).filter(models.User_receive_log.username == username).all()
        
        total_list = []
        for i in temp_user_msg:
            total_list+=eval(i.em_keyword)
        
        X = np.array(total_list).reshape(-1,1)
        kmeans = KMeans(n_clusters=5, n_init="auto", init='k-means++').fit(X)
        label_list = kmeans.labels_.tolist()
        class_center = [str(tokenizer.decode(round(em_center))) for em_center in kmeans.cluster_centers_.reshape(-1)]

        for temp_user_msg_i in temp_user_msg:
            temp_num = len(eval(temp_user_msg_i.em_keyword))
            temp_user_msg_i.main_keyword = str(class_center)
            temp_class = []
            for i in range(temp_num):
                temp_class.append(label_list.pop(0))

            set_temp_class = list(set(temp_class))
            if 0 in set_temp_class:
                temp_user_msg_i.main_0 = 1
            else:
                temp_user_msg_i.main_0 = 0
            if 1 in set_temp_class:
                temp_user_msg_i.main_1 = 1
            else:
                temp_user_msg_i.main_1 = 0
            if 2 in set_temp_class:
                temp_user_msg_i.main_2 = 1
            else:
                temp_user_msg_i.main_2 = 0
            if 3 in set_temp_class:
                temp_user_msg_i.main_3 = 1
            else:
                temp_user_msg_i.main_3 = 0
            if 4 in set_temp_class:
                temp_user_msg_i.main_4 = 1
            else:
                temp_user_msg_i.main_4 = 0
            
            db.add(temp_user_msg_i)
            db.commit()

        return JSONResponse({'message': '연결 성공', 'data':class_center})
    
    except Exception as e:
        return JSONResponse({'message': '연결 fail', 'data':str(e)})
    

@app.post("/main_keyword_search")
async def return_main_keyword_search(request: Request, db: Session=Depends(get_db)):
    try:
        data = await request.json()

        username = data.get('username')
        keyword_num = data.get('keyword_num')
        
        temp_user_msg = db.query(models.User_receive_log).filter(models.User_receive_log.username == username, eval(f"models.User_receive_log.main_{keyword_num}")==1).all()
        
        total_list = []
        for temp_item in temp_user_msg:
            total_list.append([temp_item.date, temp_item.subject, temp_item.sender, temp_item.contents])

        return JSONResponse({'message': '연결 성공', 'data':total_list})
    
    except Exception as e:
        return JSONResponse({'message': '연결 fail', 'data':str(e)})
    


################################ Health Check ###########################
@app.get("/health")
async def health_check():
    # 컨테이너  환경에서 필요
    # e.g. sudo docker-compose exec -T frontend curl -X GET http://backend:8000/health
    # -X GET은 생략 가능, curl 디폴트가 -X GET임

    return {"status": "healthy"}

