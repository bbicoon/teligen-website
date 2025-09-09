from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, RedirectResponse
import os

app = FastAPI()

# 리다이렉트 미들웨어: teligen.co.kr -> www.teligen.co.kr
@app.middleware("http")
async def redirect_middleware(request: Request, call_next):
    # Host 헤더에서 도메인 확인
    host = request.headers.get("host", "")
    
    # teligen.co.kr로 접속한 경우 www.teligen.co.kr로 리다이렉트
    if host == "teligen.co.kr":
        # 현재 경로와 쿼리 파라미터를 유지하면서 리다이렉트
        url = f"https://www.teligen.co.kr{request.url.path}"
        if request.url.query:
            url += f"?{request.url.query}"
        return RedirectResponse(url=url, status_code=301)
    
    # 다른 요청은 정상 처리
    response = await call_next(request)
    return response

# AI 모델 API 엔드포인트
@app.get("/api/ai")
async def run_ai_model():
    return {"message": "서버 테스트 성공!"}

# Next.js 정적 파일 서빙 (수정된 부분)
# 먼저 / 경로에 대해 StaticFiles를 마운트합니다.
app.mount("/", StaticFiles(directory="out", html = True), name="static")

# 404 핸들러: API와 웹페이지 요청을 구분하여 처리
@app.exception_handler(404)
async def not_found(request: Request, exc):
    # API 요청인 경우 404 JSON 응답 반환
    if request.url.path.startswith('/api'):
        return {"error": "API endpoint not found", "status": 404}
    
    # 웹페이지 요청인 경우 SPA 라우팅을 위해 index.html 반환
    return FileResponse(os.path.join("out", "index.html"))
