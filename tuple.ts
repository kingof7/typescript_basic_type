let x: [string, number]; // tuple type
x = ["Hello", 39]; // 순서, 타입, 길이 맞아야함
// x = [10, "Mark"]; error occurs
// x[3] = "world"; error occurs (undefined 이기 떄문)
// x[2] length error
const person: [stringm number] = ["Mark", 39];
const [first, second] = person; // destructering
// const [first, second, third] = person; // length error occurs