// 정수가 담긴 리스트 num_list가 주어질 때,
// 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let result = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list.length >= 11) {
      result += num_list[i];
    } else {
      result = num_list.reduce((a, b) => a * b);
      // console.log("result reduce : ", result);
    }
  }
  console.log(result);
  return result;
}

// solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]);
solution([2, 3, 4, 5]);
