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