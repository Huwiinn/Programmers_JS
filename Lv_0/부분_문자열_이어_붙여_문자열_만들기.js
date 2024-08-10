// 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다.
// parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다.
// 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// 문제 풀이
// 1. 반환 문자를 가질 변수 하나를 선언하고, my_strings 배열 요소 하나를 parts 배열 요소에 있는 숫자로 slice한다.
// 2. (1)에서 생성된 배열을 join('');하여 문자열로 최종 반환한다.

function solution(my_strings, parts) {
  const returnWord = my_strings.map((word, idx) =>
    word.slice(parts[idx][0], parts[idx][1] + 1)
  );

  return returnWord.join("");
}

solution(
  ["progressive", "hamburger", "hammer", "ahocorasick"],
  [
    [0, 4], // progr
    [1, 2], // am
    [3, 5], // mer
    [7, 7], // s
  ]
); // "programmers"
