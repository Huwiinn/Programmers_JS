const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

function getNextFizzBuzz(x) {
  if (x % 15 === 0) return "FizzBuzz";
  if (x % 3 === 0) return "Fizz";
  if (x % 5 === 0) return "Buzz";
  return String(x);
}

// 입력된 세 문자열
const a = input[0].trim();
const b = input[1].trim();
const c = input[2].trim();

// 세 문자열 중 숫자인 값을 찾기
const arr = [a, b, c];
let startNum = null;

for (let i = 0; i < 3; i++) {
  if (!isNaN(Number(arr[i]))) {
    startNum = Number(arr[i]) - i; // i번째 값이 숫자라면 전체 시작 값 추정
    break;
  }
}

// 시작 값부터 a,b,c 순으로 증가시킴
if (startNum === null) {
  // 숫자가 없는 경우, 3개의 문자열의 위치를 기반으로 시작 값 추론
  // 가장 가까운 패턴 맞는 값을 찾기 위해 1~100 중 탐색 (보장됨)
  for (let guess = 1; guess <= 100; guess++) {
    if (
      getNextFizzBuzz(guess) === a &&
      getNextFizzBuzz(guess + 1) === b &&
      getNextFizzBuzz(guess + 2) === c
    ) {
      startNum = guess;
      break;
    }
  }
}

// 다음 값 계산
const nextValue = startNum + 3;
console.log(getNextFizzBuzz(nextValue));