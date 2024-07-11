// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

// 1. 모두 배열로 쪼갠다
// 2. 조건문으로 대문자 - 소문자 각각 변경
// 3. join으로 문자열 생성

function solution(my_string) {
  let strArr = my_string.split("");

  return strArr
    .map((char) =>
      /^[A-Z]$/.test(char) ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

solution("cccCCC"); // "CCCccc";
