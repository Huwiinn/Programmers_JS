// 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
// 문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

// 문제접근
// 1. is_prefix의 길이가 my_string보다 길면 안된다.
// 2. 시작하는 문자가 같아야한다. + 두 번째 or 세 번째 문자까지

function solution(my_string, is_prefix) {
  const sameFirstChar =
    my_string.split("", 2).join("") === is_prefix.split("", 2).join("") ? 1 : 0;

  if (my_string.length >= is_prefix.length) {
    return my_string.includes(is_prefix) && sameFirstChar === 1 ? 1 : 0;
  } else {
    return 0;
  }
}

solution("banana", "ban"); // 1
solution("banana", "nan"); // 0
solution("banana", "abcd"); // 0
solution("banana", "bananan"); // 0
solution("aaabbbaaa", "ab"); // 0

// 다른 풀이

// function solution(my_string, is_prefix) {
//   return +my_string.startsWith(is_prefix);
// }

// function solution(my_string, is_prefix) {
//     return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0
// }

// function solution(my_string, is_prefix) {
//     return my_string.split(is_prefix)[0]===""?1:0;
// }
