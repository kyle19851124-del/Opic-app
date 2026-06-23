# OPIc 실전 암기툴 PWA

## 파일 구성
- index.html: 앱 화면과 기능
- data.js: 문제/답변 데이터
- manifest.json: 모바일 앱 설치 정보
- service-worker.js: 오프라인 캐시
- icon-192.png / icon-512.png: 앱 아이콘

## 새 문서 추가 시
새 문서를 ChatGPT에 업로드하고 "기존 PWA data.js에 추가해줘"라고 요청하세요.
반영된 data.js 또는 전체 zip을 다시 받아 GitHub에 업로드하면 됩니다.

## 저장 유지 방식
어려운 문제, 틀린 문제, 별점, 암기완료, 수정 답변은 브라우저 localStorage에 저장됩니다.
data.js가 업데이트되어도 같은 문제 id가 유지되면 기존 상태가 유지됩니다.
