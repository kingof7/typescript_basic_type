// never에는 어떤 것도 할당 불가, 함수의 리턴타입에 사용한다.
function error(message: string): never { // 함수 리턴타입에 많이 사용됨, never는 끝나지 않는 뜻이니까 throw new Error(E)를 사용
    throw new Error(message);
}

function fail() {
    return error("failed");
}

function infiniteLoop(): never { // throw new 말고 while과 같은 무한루프도 이용 가능
    while(true) {
        
    }
}

let a: string = 'hello';

if (typeof a !== 'string') {
    a; // never type, 잘못된 타입을 할당하지 못하도록 막음, type guard
}

declare const a2: string;

if (typeof a2 !== 'string') {
    a2; // never type
}

declare const a3: string | number | boolean; // union type

if(typeof a3 !== 'string') {
    a3; // a3가 string 타입이 아니므로 나머지 number or boolean 타입으로 할당됨, type guard
}
// 제네릭으로 타입 정의하기
//                  T가 string이라면,   T에   아래 처럼 만들고,         아니라면 never라는 타입으로 나와라라는 뜻
type Indexable<T> = T extends string ? (T & {[index: string]: any}) : never;

type ObjectIndexable = Indexable<{}> // 타입이 변수처럼 쓰이는 Generic, {}가 35번째줄로 대응해보면 T가됨, 35라인에 따르면 ObjectIndexable은 never타입이 됨.

const b: Indexable<{}> = ''; // error 발생, Indexable<{}>은 35라인에 의하면, never 타입이기 때문


