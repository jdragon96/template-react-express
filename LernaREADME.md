> lerna 초기화
- npx lerna init
> yarn workspace 설정
```
lerna.json
{
  "$schema": "node_modules/lerna/schemas/lerna-schema.json",
  "version": "0.0.0",
  "npmClient": "yarn",
  "useWorkspaces": true
}

package.json
"workspaces": [
  "packages/**"
],

cd packages
npx lerna create shared
```
> client 설치
```
yarn create react-app client --template typescript
yarn add typescript @types/node @types/react @types/react-dom @types/

> client 패키지에 아래 라이브러리 설치
lerna add typescript @types/node @types/react @types/react-dom @types/jest --scope=client

lerna add @proj/client --scope=@proj/shared@0.0.1
또는
lerna add @proj/client @proj/shared@0.0.1 

lerna bootstrap 또는 yarn
=> 로컬 패키지를 root로 이동

lerna add @proj/shared --scope=@proj/client

yarn add nodemon --dev --ignore-workspace-root-check
yarn add craco --scope=@proj/client
=> client에 shared 의존성 추가
```



https://ytg.kr/lerna-guseong/

https://velog.io/@ehgks0000/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-lerna-%EA%B5%AC%EC%84%B1

https://kdydesign.github.io/2020/08/27/mono-repo-lerna-example/