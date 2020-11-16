// 타입 단언 (type assertion)

var a;

var b = a as string;

// DOM API 조작

var div = document.querySelector('div') as HTMLDivElement;
// querySelector는 HTMLDivElement | null의 유니온 타입이기 때문에 타입 단언을 통해 변수 div가 HTMLDivElement로 단언해주어야 함