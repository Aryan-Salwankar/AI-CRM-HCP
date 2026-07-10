from fastapi import APIRouter
from pydantic import BaseModel

from services.groq_service import ask_groq

router = APIRouter()


class PromptRequest(BaseModel):
    prompt: str


@router.post("/chat")
def chat(request: PromptRequest):
    response = ask_groq(request.prompt)

    return {
        "response": response
    }