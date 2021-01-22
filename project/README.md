## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

## 자바스크립트 프로젝트에 타입스크립트 적용하기

0. js파일에 JSDoc으로 ts 시스템 입혀보기

1. 타입스크립트 기본 환경 구성
    - [x] npm 초기화
        > **npm init -y**
    - [x] ts 라이브러리 설치
        > **npm i typescript --save-dev**
    - [x] tsconfig 생성 및 기본 값 추가
        > **compilerOptions & include**
    - [x] js파일을 ts파일로 변환하기 
        > **app.js 파일을 app.ts로 변경**
    - [x] tsc 명령어로 ts 컴파일 하기
        > **런타임 에러와 타입 에러는 별도의 에러**

2. 에러를 처리해보기
    - [x] ts(2584) 관련 에러 처리하기
        > **tsconfig의 compilerOptions에 "lib":["DOM", "DOM.Iterable"]를 추가**        
    - [x] async await (ES2015) 관련 에러 처리하기
        > **"lib"에 "ES2015" 추가**




## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)