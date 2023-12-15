from typing import Any, Union
from pydantic_settings import BaseSettings


class Config(BaseSettings):

    CORS_ORIGINS: list[str] = ["*"]
    CORS_HEADERS: list[str] = ["*"]
    APP_VERSION: str = "1"


settings = Config()

app_configs: dict[str, Any] = {
    "title": "React Native App - FastAPI Backend",
    "swagger_ui_parameters": {"displayRequestDuration": True},
}
