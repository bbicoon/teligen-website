from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

app = FastAPI()

# AI 모델 API 엔드포인트 (이곳에 실제 AI 코드를 통합합니다)
@app.get("/api/ai")
async def run_ai_model():
    # 임시 AI 응답
    return {"message": "안녕하세요! 텔리젠 AI가 응답합니다."}

# Next.js 빌드 결과물('out' 폴더)을 서빙하는 설정
class SPAStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope):
        try:
            return await super().get_response(path, scope)
        except Exception:
            return await super().get_response("index.html", scope)

app.mount("/", SPAStaticFiles(directory="out", html=True), name="static")
