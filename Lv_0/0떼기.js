// 정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(n_str) {
  let idx = 0;

  while (n_str[idx] === "0") {
    idx++;
  }
  return n_str.slice(idx);
}

solution("0010"); // 10

// 다른 풀이
// const solution = (str) => String(Number(str))
