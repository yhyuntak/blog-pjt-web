# store
* 상태 관리와 관련된 파일을 보관합니다.
* Redux를 사용하는 경우 slices/, middlewares/ 등을 하위 폴더로 나눌 수 있습니다.

## 예시
```
src/store/
├── slices/         # Redux slice 파일들
├── middlewares/    # Redux middleware
├── index.ts        # Redux store 설정
└── hooks.ts        # Redux 훅 (useAppDispatch, useAppSelector)
```