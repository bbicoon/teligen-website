from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

app = FastAPI()

# API 엔드포인트는 그대로 둡니다.
@app.get("/api/ai")
async def run_ai_model():
    return {"message": "안녕하세요! 텔리젠 AI가 응답합니다."}

# _next 폴더는 정적 자산으로 직접 마운트합니다.
app.mount("/_next", StaticFiles(directory="out/_next"), name="next-assets")

# 이미지 등 다른 public 파일들을 위한 마운트
app.mount("/static", StaticFiles(directory="out"), name="static-root")

# 모든 페이지 요청을 처리하는 "Catch-all" 라우트
@app.get("/{full_path:path}")
async def catch_all(full_path: str):
    # 요청된 경로를 기반으로 실제 파일 경로를 만듭니다.
    # 예: /business/kiosk -> out/business/kiosk.html
    # 예: / -> out/index.html
    path = full_path
    if not full_path:
        path = "index.html"
    
    # 파일 확장자가 없는 경우 .html을 붙여봅니다.
    if "." not in os.path.basename(path):
        path += ".html"
    file_path = os.path.join("out", path)
    # 해당 파일이 존재하면 보여주고, 없으면 메인 index.html을 보여줍니다.
    if os.path.exists(file_path):
        return FileResponse(file_path)
    else:
        return FileResponse(os.path.join("out", "index.html"))
