/**
 * 문제
 *
 * 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
 * my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
 */

/** 
 * 제한사항
 * 
 * 0 < my_string 길이 < 100


입출력 예
my_string	result
"Bcad"	"abcd"
"heLLo"	"ehllo"
"Python"	"hnopty"
 */

/**
 * 입출력 예 설명
입출력 예 #1

"hi12392"에 있는 숫자 1, 2, 3, 9, 2를 오름차순 정렬한 [1, 2, 2, 3, 9]를 return 합니다.
입출력 예 #2

"p2o4i8gj2"에 있는 숫자 2, 4, 8, 2를 오름차순 정렬한 [2, 2, 4, 8]을 return 합니다.
입출력 예 #3

"abcde0"에 있는 숫자 0을 오름차순 정렬한 [0]을 return 합니다.
 */

// 내 풀이
function solution(my_string) {
  let strArr = my_string
    .split("")
    .map((char) => char.toLowerCase())
    .sort()
    .join("");

  console.log("strArr : ", strArr);

  return strArr;
}

// 1. 문자열 하나하나씩 잘라서 배열로 정렬
// 2. 1에서 만든 배열에서 배열 내용물을 소문자로 치환하고 내림차순으로 정렬
// 3. 마지막으로 요소들을 하나로 합쳐줌

solution("Bcad");
// solution("p2o4i8gj2");

// 기억에 남는 타인의 풀이
// function solution(my_string) {
//   return [...my_string.toLowerCase().sort().join("")];
// }
