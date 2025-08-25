const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
let N = parseInt(input);

function solution(N) {
   let fiveKgBag = Math.floor(N / 5); // 최대한 5kg 사용
  let threeKgBag = 0; // 3kg는 0부터

  while (fiveKgBag >= 0) {
    const total = fiveKgBag * 5 + threeKgBag * 3;

    if (total === N) {
        console.log(fiveKgBag + threeKgBag);
      return fiveKgBag + threeKgBag;
    } else if (total < N) {
      threeKgBag++; // 부족하면 3kg 추가
    } else {
      fiveKgBag--; // 초과하면 5kg 줄이고
      threeKgBag = 0; // 3kg 리셋
    }
  }

    console.log(-1);
  return -1;
}

solution(N);