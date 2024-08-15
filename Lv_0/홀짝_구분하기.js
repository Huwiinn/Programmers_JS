const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const n = Number(line); // 입력 값을 숫자로 변환

  if (n % 2 === 0) {
    console.log(`${n} is even`); // n이 짝수일 때 출력
  } else {
    console.log(`${n} is odd`); // n이 홀수일 때 출력
  }

  rl.close(); // 프로그램 종료
});
