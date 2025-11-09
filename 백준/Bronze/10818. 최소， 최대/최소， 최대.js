const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const numCount = input[0];
const numList = input[1].split(" ").map((num) => Number(num));

let maxNum = -Infinity;
let minNum = Infinity;

for (let i = 0; i < numCount; i++) {
  // 최솟값
  if (numList[i] < minNum) {
    minNum = numList[i];
  }

  // 최댓값
  if (numList[i] > maxNum) {
    maxNum = numList[i];
  }
}

console.log(minNum, maxNum);