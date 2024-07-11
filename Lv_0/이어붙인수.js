// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

// 1. 홀수 배열과 짝수 배열을 나눈다.
// 2. 각각 배열을 문자열로 변환한 뒤, 넘버로 변경하여 덧셈 연산 수행

function solution(num_list) {
  let evenArr = [];
  let oddArr = [];

  num_list.forEach((v) => {
    if (v % 2 === 1) {
      oddArr.push(v);
    } else {
      evenArr.push(v);
    }
  });

  return Number(evenArr.join("")) + Number(oddArr.join(""));
}

solution([3, 4, 5, 2, 1]);
