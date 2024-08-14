// 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, k) {
  return Array(k).fill(my_string).join("");
}

solution("string", 3); // 'stringstringstring'

// 다른 코드
// function solution(my_string, k) {
//     return my_string.repeat(k)
// }
// repeat 함수! https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
