declare const maybe: unknown; // any 였다면 3번째줄에서 에러나지 않음, 타입 안정성이 낮아짐, 따라서 unknown으로 타입을 지정한다.
// any 자리에 unknown을 지정하는 연습을 해야함.
const aNumber: number = maybe;

if (maybe === true) {
    const aBoolean: boolean = maybe; // type guard
}

if (typeof maybe === 'string') {
    const aString: string = maybe;
}

