// 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.
// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.

// 나의 풀이 접근
// 1. control을 배열로 변경
// 2. control 내부 숫자를 반복문에서 돌리고, 특정 값일 때마다 n값을 변경

function solution(n, control) {
  let number = 0;
  if (control) {
    control
      .split("")
      .map(
        (v) =>
          (v === "w" && n + 1) ||
          (v === "s" && n - 1) ||
          (v === "d" && n + 10) ||
          (v === "a" && n - 10)
      )
      .forEach((v) => {
        number += v;
        console.log("number : ", number);
      });
  }

  return number;
}

solution(0, "wsdawsdassw");
