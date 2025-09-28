const fs = require("fs");
const numArr = fs.readFileSync(0, "utf8").trim().split(/\r?\n/).map(Number);

function solution(numArr) {
  let max = numArr[0];
let maxIdx = 1;

  for (let i = 0; i < numArr.length; i++) {
    if (max < numArr[i]) {
      max = numArr[i];
      maxIdx = i + 1;
    }
  }
    
    console.log(Number(max));
  console.log(maxIdx);
}

solution(numArr);