interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

function fetchProducts(): Promise<Product[]> {

}

// interface ProductDetail {
//     id: number; 
//     name: string; 
//     price: number;
// }

// Pick<'이미 정의된 타입', '타입 내 필드명(여러개일 경우 |로 구분)'>
type ShoppingItem = Pick<Product, 'id'|'name'|'price'>
function displayProductDetail(shoppingItem: ShoppingItem) {

}

// Omit<'이미 정의된 타입', '해당 타입 내에서 제거할 필드명(마찬가지로 여러개일 경우 |로 구분)'>
type ShoppingItem = Omit<Product, 'brand'|'stock'>
function displayProductDetail(shoppingItem: ShoppingItem) {

}