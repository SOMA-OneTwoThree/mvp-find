# MVP Landing

랜딩 페이지와 MVP 검증을 위한 매우 작은 Next.js 프로젝트입니다.

Vercel 배포 확인과 GA4 기반 이벤트 측정을 빠르게 진행하기 위한 용도입니다.

## Local Development

의존성을 설치하고 개발 서버를 실행합니다.

```bash
npm install
npm run dev
```

GA4 측정 ID는 `.env.local`과 Vercel 환경변수에서만 관리하고 GitHub에는 커밋하지 않습니다.

## Available Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Tracking (Call To Action)

- 유입 및 이벤트 측정은 현재 GA4 기준으로 동작합니다.
- CTA 클릭 이벤트 이름은 cta_click으로 통일합니다.
- CTA 구분은 버튼 문구가 아니라 cta_id를 기준으로 합니다.
- 같은 CTA는 한 브라우저에서 1회만 이벤트를 전송합니다.

## Collaboration

- `main`: 운영 브랜치
- `feature/*`: 작업 브랜치
- PR을 올린 뒤 Vercel Preview에서 확인하고 merge합니다.
