const fs = require("fs");
const [min, max] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const isDivided = Array(1000001).fill(false); // max와 min 사이에 들어가는 최대 수, ㄴㄴ제곱이 아닌 수가 true.
let count = 0;

// 에라토스테네스 체를 이용한 제곱 ㄴㄴ 체 만들기
for (let i = 2; i ** 2 <= max; i++) {
  let n = Math.ceil(min / i ** 2); // 걸러내기의 시작지점을 찾는 과정
  // 만약 제곱수에 의해 나눠진다면, 이후 아래의 코드에서 해당 숫자도 true로 지정된다.
  // 만약 안 나눠진다면, 반올림에 의해, 제곱수가되는 그 다음 숫자부터 시작해서 true로 걸러지게 한다.

  while (n * i ** 2 <= max) {
    isDivided[n * i ** 2 - min] = true; // 저장공간 최적화를 위해 -min
    n++;
  }
}

for (let i = 0; i <= max - min; i++) {
  if (!isDivided[i]) count++;
}

console.log(count);
return count;