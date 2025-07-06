// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ");

let firstNum = 0;
let secondNum = 0;

for (let i = 0; i < input.length; i++) {
  firstNum = Number(input[i - 1]);
  secondNum = Number(input[i]);
}

console.log(firstNum + secondNum);
