// 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start_num, end_num) {
  const result = Array(start_num + 1)
    .fill()
    .map((v, i) => start_num - i >= end_num && start_num - i)
    .filter((v) => v >= end_num);

  console.log(result);
  return result;
}

solution(10, 3); // [10, 9, 8, 7, 6, 5, 4, 3]
// solution(1, 0); // [1, 0]
