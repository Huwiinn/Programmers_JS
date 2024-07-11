// 정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 내 풀이
// 1. end_num 값만큼 start_num이 증가해야한다고 생각하여 문제에 접근함
// 2. 증가 값을 배열에 넣어줌

function solution(start_num, end_num) {
  const arr = [];
  for (let i = start_num; i <= end_num; i++) {
    arr.push(i);
  }

  return arr;
}

solution(3, 10, [3, 4, 5, 6, 7, 8, 9, 10]);
