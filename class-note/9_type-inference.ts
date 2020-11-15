interface Dropdown<T> {
    value : T;
    title: string;
}

// var shoppingItem: Dropdown<string> ={
//     value : 'abc',
//     title: 'hello'
// }

interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag : K;
}

var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'value', //이 부분은 DetailDropdwon<K>에서 제네릭 K가 string을 받으며
    tag : 'tag'     //확장된 Dropdown 또한 같은 제네릭을 받음으로써 value, tag가 모두 string을 받게 된다
}

// Best Common Type : 배열 내 타입들을 유니온 타입으로 추론, 정의함
var arr = [1, 2, 3, 'string', true, false, true]