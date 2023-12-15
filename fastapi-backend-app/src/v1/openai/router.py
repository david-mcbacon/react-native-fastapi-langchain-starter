from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from src.v1.openai.schemas import StreamRequestOpenAi
from src.v1.openai.service import send_message

router = APIRouter(prefix="/openai", tags=["openai"])


@router.post("/stream")
def stream(body: StreamRequestOpenAi):
    return StreamingResponse(send_message(body), media_type="text/event-stream")
