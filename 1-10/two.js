/* 변수를 선언하고, 그 변수에 숫자 10을 할당하는 코드 */

let marx = 10; // marx를 선언, 10을 !할당!

/* 변수란 무엇인가? */
/* 변수는 데이터를 담는 저장소 marx저장소 */

/* 선언은 무엇인가 */
//1. var
// var로 선언된 yoone는 , 함수 레벨 스코프를 가진다. 즉, var 변수로 선언된 yoone는 함수 전체에 접근할수있다.
// var로 선언된 yoone는,위치와 상관없이 함수의 최상단으로 호이스팅된다.
// var로 선언된 yoone는, 재선언이 가능하다. 따라서, 안쓴다.
var yoone = "cute";
var yoone = "sexy";

//2. let
//  let 은 블록 레벨 스코프를 가진다. 즉, 변수는 선언된 블록 '{ }' 내에서 만 접근할수있다.
//  let 은 호이스팅 되지만, 선언 전에 접근하려고 하면  'ReferenceError' 가 발생한다.
//  let 은 '재선언' 이 불가능하다.
let name = "yoon";
// let name = "yo"; // syntaxError : name이 이미 "선언되에 있다!"

// 3. const
// const 는 let 처럼 블록 레벨 스코프를 가진다.
// const 변수도 호이스팅되지만, let과 같이 선언 전에 접근할 수 없다.
// const 는 재선언과 재할당이 불가능하다. 이는 "상수"로 사용되어야 하는 값에 적절하다.
const Dakdak = "hard";
const ClassModuleInstance = new ClassModuleInstance();
