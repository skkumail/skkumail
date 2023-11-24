from pydantic import BaseModel, Field

class KeywordExtractionRequest(BaseModel):
    username: str
    sender: str
    num: int

    class Config:
        json_schema_extra = {
            "example": {
                "username": "johndoe",
                "sender": "email@example.com",
                "num": 123
            }
        }

class ChatGPTMailRequest(BaseModel):
    contents: str = Field(..., example="Dear John, I hope this message finds you well...")
    username: str = Field(..., example="johndoe")
    send_address: str = Field(..., example="john.doe@example.com")
    style: str = Field(..., example="formal")
    name: str = Field(..., example="John Doe")
    relation: str = Field(..., example="colleague")

    class Config:
        json_schema_extra = {
            "example": {
                "contents": "Dear John, I hope this message finds you well...",
                "username": "johndoe",
                "send_address": "john.doe@example.com",
                "style": "formal",
                "name": "John Doe",
                "relation": "colleague"
            }
        }


class SendMailRequest(BaseModel):
    username: str = Field(..., example="johndoe")
    head: str = Field(..., example="Meeting Schedule")
    text: str = Field(..., example="Hello, please find the meeting agenda attached.")
    address: str = Field(..., example="recipient@example.com")
    prompt: str = Field(..., example="agenda for next meeting")

    class Config:
        json_schema_extra = {
            "example": {
                "username": "johndoe",
                "head": "Meeting Schedule",
                "text": "Hello, please find the meeting agenda attached.",
                "address": "recipient@example.com",
                "prompt": "agenda for next meeting"
            }
        }

