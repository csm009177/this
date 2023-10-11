// 1. 함수 기명 선언 방식
function outer() {
  return "hello";
}
// 2. 익명함수 / 함수를 대입하는 방식
const outerTwo = function() {
 
// 함수가 변수에 담겨 있어서 변수가 함수 이름처럼 쓰인다
// 변수는 쓰지 않으면 램에서 사라진다
// 함수는 항상 메모리에 잡혀 있어서 램을 차지하고 있다
// 최적화 입장에서 밑에 것이 훨씬 낫다
 return "bye";
}
// 3. 화살표 함수 (소괄호를 쓰는 유형)
const outerThree = () => "wow";

// 4. 매개변수가 있는 경우 (매개변수가 있으면 소활호를 생략)
const outerFour = a => a;

console.log(outer());
console.log(outerTwo());
console.log(outerThree());
console.log(outerFour('test'));

