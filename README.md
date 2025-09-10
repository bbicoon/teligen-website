# TELIGEN Website

텔리젠의 키오스크, 자동판매기, 유통포스, 앱링커 등 다양한 사업 분야를 소개하는 공식 웹사이트입니다.

## 🚀 기술 스택

- **Frontend**: Next.js 15.5.0 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Backend**: FastAPI (Python)
- **Server**: Uvicorn
- **Image Optimization**: WebP format

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── _components/          # 페이지별 컴포넌트
│   │   ├── hero-section.tsx
│   │   ├── business-section.tsx
│   │   ├── contact-section.tsx
│   │   └── solutions-section.tsx
│   ├── business/             # 사업 분야 상세 페이지
│   │   ├── kiosk/
│   │   ├── vending/
│   │   ├── pos/
│   │   └── hyperedge/
│   ├── portfolio/            # 구축 사례
│   ├── media/               # 뉴스 및 미디어
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                   # shadcn/ui 컴포넌트
│   ├── header.tsx           # 헤더 컴포넌트
│   └── footer.tsx           # 푸터 컴포넌트
├── lib/
│   └── utils.ts
├── scripts/
│   └── compress-images.js   # 이미지 압축 스크립트
├── main.py                  # FastAPI 서버
└── requirements.txt         # Python 의존성
```

## 🛠️ 설치 및 실행

### 1. 저장소 클론

```bash
git clone [your-repository-url]
cd teligen-website
```

### 2. 의존성 설치

```bash
# Node.js 의존성 설치
npm install

# Python 의존성 설치 (FastAPI 서버용)
pip install -r requirements.txt
```

### 3. 개발 서버 실행

```bash
# Next.js 개발 서버
npm run dev

# FastAPI 서버 (별도 터미널에서)
python main.py
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 🎨 주요 기능

- **반응형 헤더**: 데스크톱/모바일 대응 네비게이션, 드롭다운 메뉴
- **히어로 섹션**: 밝은 네이비 그라데이션 배경의 메인 소개
- **사업 분야 섹션**: 키오스크, 자동판매기, 유통포스, 앱링커 소개
- **상세 페이지**: 각 사업 분야별 전문적인 소개 페이지
- **구축 사례**: 꼬똥이네, 오피스25, 와이케이, KT wiz샵 등 실제 사례
- **미디어 섹션**: 키오스크 관련 최신 뉴스 및 블로그 링크
- **이미지 최적화**: WebP 형식으로 압축된 고품질 이미지
- **정적 사이트**: Next.js Static Export로 빠른 로딩

## 📦 빌드 및 배포

### 정적 사이트 빌드

```bash
npm run build
```

### FastAPI 서버 실행

```bash
python main.py
```

### 이미지 압축 (선택사항)

```bash
node scripts/compress-images.js
```

## 🌐 배포 정보

- **도메인**: www.teligen.co.kr
- **리다이렉트**: teligen.co.kr → www.teligen.co.kr (301 리다이렉트)
- **SSL**: HTTPS 강제 적용
- **호스팅**: Gabia Container (1GB 용량 최적화)

## 🔧 환경 설정

### Next.js 설정

- **Static Export**: `output: 'export'` 설정으로 정적 사이트 생성
- **이미지 최적화**: `images: { unoptimized: true }` 설정으로 정적 내보내기 호환
- **소스맵**: 프로덕션에서 비활성화하여 용량 최적화

### FastAPI 설정

- **정적 파일 서빙**: `out` 폴더의 Next.js 빌드 결과물 서빙
- **도메인 리다이렉트**: teligen.co.kr → www.teligen.co.kr 자동 리다이렉트
- **404 처리**: SPA 라우팅을 위한 index.html 반환

## 📊 성능 최적화

- **이미지 압축**: PNG/JPG → WebP 변환으로 용량 70% 이상 절약
- **정적 사이트**: CDN 배포로 빠른 로딩 속도
- **번들 최적화**: 불필요한 소스맵 제거
- **1GB 호스팅**: Gabia Container 용량 제한에 맞춘 최적화

## 📝 라이선스

이 프로젝트는 텔리젠의 내부 프로젝트입니다.

## 🤝 기여하기

1. 이 저장소를 포크하세요
2. 기능 브랜치를 생성하세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성하세요
