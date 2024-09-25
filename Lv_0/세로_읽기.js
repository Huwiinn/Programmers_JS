// 문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, m, c) {
  const arr = [];

  for (let i = 0; i < my_string.length; i += m) {
    arr.push(my_string.slice(i, i + m));
  }

  const result = [];

  arr.map((v) => result.push([...v][c - 1]));

  return result.join("");
}

solution("ihrhbakrfpndopljhygc", 4, 2); // 'happy'
solution("programmers", 1, 1); // "programmers"

// 다른 풀이
// function solution(my_string, m, c) {
//     return [...my_string].filter((_, i) => i % m === c - 1).join('');
// }
