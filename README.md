## Lerna 명령어 설명
```
$ yarn add -D prettier --ignore-workspace-root-check
=> 모든 패키지에 라이브러리 설치하기

$ yarn workspaces server -D prettier
=> server라는 프로젝트에 라이브러리 설치하기

$ lerna bootstrap --hoist
=> 각 프로젝트에 명시된 의존성을 설치한다.
=> 동일한 버전의 라이브러리 있으면 심링크를 걸어줌
=> --hoist 옵션으로 모든 공통 모듈을 루트로 끌어올림

$ yarn workspace info
=> 워크스페이스 목록 확인

$ yarn workspace @proj/client add @proj/shared

$ yarn
=> 로컬 패키지에 심볼릭 링크를 생성한다.
```

## Server 만들기
```
$ yarn init
$ yarn tsc init
$ yarn workspace @proj/server add express
$ yarn workspace @proj/server add -D @types/node @types/express nodemon ts-node
$ yarn workspace @proj/server add @proj/shared@1.0.0
```

## Client(React) 만들기
```
$ yarn create react-app client --template typescript
```

## Shared project 만들기
```
$ yarn init
> tsconfig.json 파일 작성하기
$ yarn add -D typescript

$ yarn workspace @proj/client add @proj/shared@1.0.0
=> @proj/client에 의존성 추가하기
$ yarn workspace @proj/server add @proj/shared@1.0.0
```

## Prettier 설치
```
$ yarn create react-app client --template typescript
$ yarn add -D prettier
$ ROOT에 ".prettierrc" 파일 만들고, 아래 내용 저장
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
$ extension에서 prettier 설치
$ [Ctrl] + [Shift] + [P], >preferences: Open Workspace Settings(JSON) 검색 후 [Enter]
$ settings.json에 포매터 관련 설정하기
```

## ESLint 설치
```
$ yarn add -D eslint --ignore-workspace-root-check
$ yarn add -D eslint-plugin-import eslint-plugin-react yarn add -D eslint --ignore-workspace-root-check
$ yarn eslint --init
=> 상황에 맞는 옵션 선택하기
=> ".eslintrc.json" 파일 생성
$ extension에서 ESLint 설치
```