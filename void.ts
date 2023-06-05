function returnVoid(message: string): void { // void 리턴타입으로 자동 적용 됨
    console.log(message);

    return undefined; // void 리턴 함수에는 return 에 undefined만 유일하게 사용가능
}

const r = returnVoid('리턴이 없다.'); // r은 void
