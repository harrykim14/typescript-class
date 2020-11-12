interface User {
    name: string;
    age: number;
}

var seho:User ={
    age:33,
    name: '세호'
}

function getUser(user:User):void {
    console.log(user)
}

const capt = {
    name: '캡틴',
    age: 100
}

getUser(capt);

interface SumFunction {
    (a: number, b: number): number; 
}

var sum: SumFunction
sum = function(a: number, b: number): number {
    return a+b;
}

// Indexing

interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];

// Dictionary Pattern

interface StringRegexDictionary {
    [key: string]: RegExp
}

var obj: StringRegexDictionary= {
    // sth : /abc/
    cssFile: /\.css$/,
    jsFile: /\js$/
}

// obj['cssFile'] = 'a'

// interface implements 

interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

var capts: Developer ={
    name: 'caps',
    age: 100,
    language: 'ts'
}