// 함수의 파라미터에 타입을 정의하는 방식
function sssum(a:number, b:number) {
    return a+b;
}


// 함수의 반환 값에 타입을 정의하는 방식

function ssum():number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function ssssum(a:number, b:number):number {
    return a+b;
}

// 함수의 리턴 타입이 number이기 때문에 이렇게 사용할 수 있다
sum(ssum(), 10);

// 함수의 옵셔널 파라미터
function log(a: string, b: string, c?:string) {
    let str = [a, b, c].join(' ');
    console.log(str);
}

log('a','b');



