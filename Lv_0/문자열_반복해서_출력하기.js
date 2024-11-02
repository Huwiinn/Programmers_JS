// 문자열 str과 정수 n이 주어집니다.
// str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let string;
let n;

rl.on("line", function (input) {
  console.log("------------------", input);
  console.log("222------------", input.split(" "));
  const [str, num] = input.split(" "); // 공백 기준으로 문자열 분리
  string = str;
  n = parseInt(num); // 두 번째 값을 정수로 변환
  rl.close(); // 입력이 끝났으므로 닫음
}).on("close", function () {
  // string을 n번 반복해서 출력
  console.log(string.repeat(n));
  const result = string.repeat(n);
  return result;
});
