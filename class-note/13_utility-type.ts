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

interface UpdateProduct {
    id?: number;
    name?: string;
    price?: number;
    brand?: string;
    stock?: number;
}

/* Partial의 상세코드
    type Required<T> = {
        [P in keyof T]-?: T[P];
    };
*/

// 풀어써보면 이렇게 된다
type UpdateProductEach {
    id?: Product['id'];
    name?: Product['name'];
    price?: Product['price'];
    brand?: Product['brand'];
    stock?: Product['stock'];
}

// 조금 짧게 줄여보자
type UpdateProductShorten {
    [p in 'id' | 'name' | 'price' | 'brand' | 'stock' ]?: Product[p]
}

// 더 짧게 줄여서 상세코드와 비슷해진다
type UpdateProductKeys = keyof Product;
type UpdateProductPartial {
    [p in keyof Product]?: Product[p];
    // 첫번째 루프에서  id?: Product['id'];를, 두번째 루프에서 name?: Product['name']; ... 처럼 적용된다
}

// <T>와 같이 타입 제네릭을 사용하면 Product에 국한되지 않는 코드로 변경된다
type Subset<T> = {
    [p in keyof T]?: T[p];
}


// UpdateProduct type과 같은 효과를 낸다
function updateProductItem(productItem: Partial<Product>) {

}
