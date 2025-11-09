const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const numCount = Number(input[0]);
const numList = [...input[1]].map((num) => Number(num));

let sum = 0;

for (let i = 0; i < numCount; i++) {
  sum += numList[i];
}

console.log(sum);