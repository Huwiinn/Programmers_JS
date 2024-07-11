// 정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 1. 가장 작은 수부터 오름차순 배열
// 2. 나머지는 제거

function solution(num_list) {
  const result = num_list.sort((a, b) => a - b).slice(0, 5);
  return result;
}

solution([12, 4, 15, 46, 38, 1, 14]); // [1, 4, 12, 14, 15]
