// 문자열 str이 주어집니다.
// 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const maxLength = Math.max(...input.map((str) => str.length));

  // 문자열을 동일한 길이로 맞추기 위해 빈 공간을 추가합니다.
  const paddedInput = input.map((str) => str.padEnd(maxLength, " "));

  // 시계방향으로 90도 회전시키기
  let result = [];
  for (let i = 0; i < maxLength; i++) {
    let newRow = "";
    for (let j = paddedInput.length - 1; j >= 0; j--) {
      newRow += paddedInput[j][i];
    }
    result.push(newRow);
  }

  // 결과 출력
  console.log(result.join("\n"));
});
