// function logMessage(value: any) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);


// Union Type '|'
function logMessage(value: string | number){
    if (typeof value === 'number'){
        value.toLocaleString();
    }
    if (typeof value === 'string'){
        value.toLowerCase();
    }
    // Type Guard
}

logMessage('hello');
logMessage(100);


interface Developers {
    name: string;
    skill: string;
}

interface Person {
    name : string;
    age: number;
}

function askSomeone(someone: Developers | Person){
    someone.name
    // someone.age
    // someone.skill
}

function askSomeone2(someone: Developers & Person){
    someone.name
    someone.age
    someone.skill
}

// (property) Developers.skill: string
askSomeone({name : '디벨로퍼', skill: '웹 개발'});
// (property) Person.age: number
askSomeone({name : '디벨로퍼', age: 30});

// Intersection을 사용하면 두 인터페이스의 속성을 모두 사용할 수 있다
askSomeone2({name : '디벨로퍼', age: 30, skill: '웹 개발'})