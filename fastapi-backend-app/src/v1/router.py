from fastapi import APIRouter
from src.v1.openai import router as openai_router

router = APIRouter(prefix="/v1")

router.include_router(openai_router.router)
