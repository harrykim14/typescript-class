// ES2015 (ES6)

class Person {
    // 클래스 예약어
    constructor(name, age){
        console.log('생성되었습니다.');
        this.name = name;
        this.age = age;
    }

}

var harry = new Person('Harry', 30);

console.log(harry.name);
console.log(harry.age);
