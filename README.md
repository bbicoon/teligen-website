# TELIGEN Website

텔리젠의 AI 기술을 소개하는 공식 웹사이트입니다. AI 상담 솔루션과 무인결제 키오스크 서비스를 제공합니다.

## 🚀 기술 스택

- **Framework**: Next.js 15.5.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── _components/          # 페이지별 컴포넌트
│   │   ├── hero-section.tsx
│   │   └── solutions-section.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                   # shadcn/ui 컴포넌트
│   ├── header.tsx           # 헤더 컴포넌트
│   └── chat-modal.tsx       # 채팅 모달 컴포넌트
└── lib/
    └── utils.ts
```

## 🛠️ 설치 및 실행

### 1. 저장소 클론
```bash
git clone [your-repository-url]
cd teligen-website
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 🎨 주요 기능

- **반응형 헤더**: 데스크톱/모바일 대응 네비게이션
- **히어로 섹션**: AI 기술 소개 및 CTA 버튼
- **솔루션 섹션**: AI 상담 솔루션과 키오스크 소개
- **AI 채팅**: 실시간 AI 상담 기능
- **스크롤 효과**: 헤더 배경 변화 애니메이션

## 📦 빌드 및 배포

### 프로덕션 빌드
```bash
npm run build
```

### 프로덕션 서버 실행
```bash
npm start
```

## 🔧 환경 설정

프로젝트는 기본 Next.js 설정을 사용합니다. 추가 환경 변수가 필요한 경우 `.env.local` 파일을 생성하세요.

## 📝 라이선스

이 프로젝트는 텔리젠의 내부 프로젝트입니다.

## 🤝 기여하기

1. 이 저장소를 포크하세요
2. 기능 브랜치를 생성하세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성하세요
