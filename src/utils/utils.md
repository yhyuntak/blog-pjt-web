# utils
* API 통신 로직을 관리하는 폴더입니다.
* Axios 인스턴스를 설정하고 API 요청 로직을 작성합니다.
## 예시
```
src/services/
├── api.ts          # Axios 인스턴스
├── userService.ts  # 사용자 관련 API 함수
├── authService.ts  # 인증 관련 API 함수
└── index.ts        # 서비스 함수 일괄 export
```