const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString()
  .split("\n")
  .map((item) => item);

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  console.log(A + B);
}
