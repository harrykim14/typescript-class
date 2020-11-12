
interface PersonInter {
    name : string;
    age: number;
}

type PersonType = {
    name : string;
    age: number;
}

/*
    interface PersonInter
*/
var harry: PersonInter = {
    name: '해리', 
    age: 30

}
/*
    type PersonType = {
    name: string;
    age: number;
}
*/
var hurry: PersonType = {
    name: '허리', 
    age: 30
}

// 타입 별칭을 사용하면 가시성 높은 코드를 작성할 수 있다
// 하지만 인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능
// Open–closed principle에 따라 가급적 확장 가능한 인터페이스로 선언하자