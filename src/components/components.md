# components
* 재사용 가능한 컴포넌트를 보관합니다.
* 컴포넌트를 **UI 단위(Atoms, Molecules, Organisms)**로 분류하는 것이 최신 트렌드입니다.

## 예시 
```
src/components/
├── atoms/         # 가장 작은 단위의 컴포넌트 (버튼, 텍스트 등)
├── molecules/     # 여러 Atom을 조합한 작은 컴포넌트 (카드, 폼 필드 등)
├── organisms/     # Molecule을 조합한 복잡한 컴포넌트 (헤더, 푸터 등)
├── templates/     # 페이지 스켈레톤을 위한 템플릿
└── index.ts       # 컴포넌트 일괄 export
```
