from pydantic import BaseModel
from typing import Literal, List


class MessageOpenAi(BaseModel):

    content: str
    role: Literal["user", "assistant"]


class StreamRequestOpenAi(BaseModel):

    messages: List[MessageOpenAi]
    model: Literal["gpt-4", "gpt-4-1106-preview", "gpt-3.5-turbo-1106"]
