from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from keybert import KeyBERT
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

# env 필요
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

FRONTEND_HOST = os.environ.get('FRONTEND_HOST')
FRONTEND_PORT = os.environ.get('FRONTEND_PORT')
if FRONTEND_HOST and FRONTEND_PORT:
    new_origin = f"http://{FRONTEND_HOST}:{FRONTEND_PORT}"
    origins.append(new_origin)


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# KeyBERT 모델 로딩
keybert_model = KeyBERT("distilbert-base-nli-mean-tokens")


@app.post("/extract_keywords")
async def extract_keywords(request: Request):
    try:
        # JSON 데이터를 추출
        data = await request.json()
        email_text = data.get("email_text")

        if email_text is None:
            raise HTTPException(
                status_code=422, detail="Missing 'email_text' field in the request body"
            )

        # KeyBERT를 사용하여 키워드 추출
        keywords = keybert_model.extract_keywords(
            email_text, keyphrase_ngram_range=(1, 1), stop_words="english"
        )

        print(keywords)

        # 추출된 키워드를 JSON 형식으로 반환
        response_data = {"keywords": keywords}
        return JSONResponse(content=response_data)
    except Exception as e:
        # 오류가 발생한 경우 500 Internal Server Error 반환
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
