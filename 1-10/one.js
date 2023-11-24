/* hello world 콘솔에 출력하기 */
console.log("Hello world"); // hello world

/* 객체 출력 예시 */
let user = {
  name: "kimjongyoon",
  age: 19,
  email: "cuteyoon@naver.com",
};
console.log("user object", user); //  { name: 'kimjongyoon', age: 19, email: 'cuteyoon@naver.com' }

/* 배열 출력 */
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log("numbers Array:", numbers); //numbers Array: [
1, 2, 3, 4, 5, 6, 7;

/* 배열 + 객체 */

const complexData = {
  users: [{ name: "yoone", age: 30 }],
  total: 2,
};

console.log(complexData); // { users: [ { name: 'yoone', age: 30 } ], total: 2 }
