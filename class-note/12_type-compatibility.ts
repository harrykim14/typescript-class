interface Developer12 {
    name: string;
    skill: string;
}

interface Person12 {
    name: string;
}

var developer: Developer12;
var person: Person12;

// 구조적으로 큰 속성을 가진 타입이 오른쪽에 와야 함
person = developer;
// developer = new Person();
//'Person'은(는) 형식만 참조하지만, 여기서는 값으로 사용되고 있습니다

var add = function(a: number){
    return a+a;
}

var sum = function(a: number, b: number){
    return a+b;
}

// add함수보다 sum함수가 '구조적으로 더 크다'
sum = add;
// add = sum;

interface Empty<T> {

}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;

//'NotEmpty<number>' 형식은 'NotEmpty<string>' 형식에 할당할 수 없습니다. 'number' 형식은 'string' 형식에 할당할 수 없습니다