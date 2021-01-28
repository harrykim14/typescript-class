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
    - [x] `tsc` 명령어로 ts 컴파일 하기
        > **런타임 에러와 타입 에러는 별도의 에러**

2. 에러를 처리해보기
    - [x] ts(2584) 관련 에러 처리하기
        > **tsconfig의 compilerOptions에 "lib":["DOM", "DOM.Iterable"]를 추가**        
    - [x] async await (ES2015) 관련 에러 처리하기
        > **"lib"에 "ES2015" 추가**

3. 명시적인 `any` 선언하기
    - [x] `tscongif.json` 파일에 `noImplicitAny` 값을 `true`로 추가
        > **일단은 코드를 이해하기 전에 오류를 해결한다는 자세로 접근**
    - [x] 가능한 구체적인 타입으로 타입 정의 적용
        > `as HTMLSpanElement`나 `as HTMLParagraphElement`처럼 HTMLElement를 상속받는 객체들도 상세히 타입 정의하기

4. 프로젝트 환경 구성
    - babel, eslint, prettier 등의 환경 설정

5. 외부 라이브러리 모듈화
    - 라이브러리 자체에 index.d.ts파일이 있다면 바로 적용됨
        > ex) axios
    - tsconfig.json 내에 typeRoots 설정을 적용하면 임의로 ./node_modules/@types 외에도 다른 폴더에서도 index.d.ts로 타입 설정 파일을 불러올 수 있다

6. 타입스크립트의 strict 모드 적용하기
    ```
    "noImplicitAny": true,
    "strict": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "alwaysStrict": true,
    ```
    


## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)