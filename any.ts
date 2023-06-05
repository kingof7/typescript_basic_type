function returnAny(message: any): any { // noImplicitAny option
    console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

any1.toString();

let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d; // any가 객채에 의해(객체로) 전파되는 케이스

// any는 가급적 쓰지 않는 편이 좋음 > 타입 안정성을 잃는다.


// any를 꼭 써야한다면, 누수를 막는 지점이 반드시 필요, 중요함
function leakingAny(obj: any) {
    const a: number = obj.num; // any의 타입누수를 막는 지점 (type guard) ex:) unknown.. 
    // ...
    const b = a + 1; // => any
    return b;
}

const c = leakingAny({num: 0}); // c도 any
c.indexOf("0");

