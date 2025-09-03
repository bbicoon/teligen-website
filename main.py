from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

app = FastAPI()

# AI 모델 API 엔드포인트
@app.get("/api/ai")
async def run_ai_model():
    return {"message": "서버 테스트 성공!"}

# Next.js 정적 파일 서빙 (수정된 부분)
# 먼저 / 경로에 대해 StaticFiles를 마운트합니다.
app.mount("/", StaticFiles(directory="out", html = True), name="static")

# 루트 경로 또는 존재하지 않는 경로 요청 시 index.html을 반환하도록 설정
@app.exception_handler(404)
async def not_found(request, exc):
    return FileResponse(os.path.join("out", "index.html"))
