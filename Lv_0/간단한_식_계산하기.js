// 문자열 binomial이 매개변수로 주어집니다.
// binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

function solution(binomial) {
  // binomial을 공백을 기준으로 나누어 a, op, b로 분리
  const [a, op, b] = binomial.split(" ");

  // a와 b는 문자열이므로 숫자로 변환
  const numA = Number(a);
  const numB = Number(b);

  // op에 따라 계산한 값을 반환
  if (op === "+") {
    return numA + numB;
  } else if (op === "-") {
    return numA - numB;
  } else {
    return numA * numB;
  }
}

console.log(solution("43 + 12")); // 55
console.log(solution("0 - 7777")); // -7777
console.log(solution("40000 * 40000")); // 1600000000
