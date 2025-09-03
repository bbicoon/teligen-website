# 프로덕션 배포 최적화 가이드

## 용량 절약 방법

### 1. 빌드 전 정리
```bash
# 불필요한 파일들 제거
npm run clean

# node_modules 재설치 (선택사항)
rm -rf node_modules package-lock.json
npm install --production
```

### 2. 프로덕션 빌드
```bash
# 최적화된 빌드
npm run build

# 정적 내보내기 (선택사항)
npm run export
```

### 3. 배포 시 제외할 파일들
- `.next/` 폴더 (빌드 결과물)
- `node_modules/` (의존성)
- `.git/` (버전 관리)
- `*.map` (소스맵)
- 개발 관련 설정 파일들

### 4. 호스팅 업로드 시 포함할 파일들
```
teligen-website/
├── public/           # 정적 파일들
├── .next/           # 빌드 결과물 (필수)
├── package.json     # 의존성 정보
├── next.config.ts   # Next.js 설정
└── README.md        # 프로젝트 설명
```

### 5. 추가 최적화 옵션
- 이미지 압축 및 WebP 변환
- CSS/JS 압축
- 불필요한 의존성 제거
- CDN 사용 고려

## 예상 최종 용량
- **현재**: ~430MB
- **최적화 후**: ~50-100MB (빌드 결과물만)
- **정적 내보내기**: ~30-50MB
