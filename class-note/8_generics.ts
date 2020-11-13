// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText();

// function logText<T>(text: T):T{
//     console.log(text);
//     return text;
// }

// function logText(text: string){
//     console.log(text);
//     text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number){
//     console.log(num);
//     return num;
// }

// function logText(text: string | number){
//     console.log(text);
//     return text;
// }


// const a = logText('하이');

// logText(10);

function logText<T>(text: T):T{
    console.log(text);
    return text;
}

const str = logText<string>('a');
const num = logText<number>(10)
const flag = logText<boolean>(true);


// function logTextLength<T>(text: T[]): T[]{
//    console.log(text.length);
//    text.forEach(function (text) {
//        console.log(text)
//    });
//    return text;
// }

interface LengthType {
    length : number;
}

function logTextLength<T extends LengthType>(text: T): T {
    text.length
    return text;
}

logTextLength('a');

interface ShoppingItem{
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption();
getShoppingItemOptionn("name");