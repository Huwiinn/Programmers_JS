// 정수가 담긴 리스트 num_list가 주어질 때,
// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

// 1. 원소들의 곱 값과 제곱의 값을 각각의 변수에 할당한다.
// 2. 둘을 비교하여 return한다.

function solution(num_list) {
  let multiplicationValue;
  let squareValue;

  if (num_list) {
    multiplicationValue = num_list.reduce((acc, cur) => {
      return acc * cur;
    }, 1);

    // 틀림
    // squareValue =
    //   num_list.reduce((acc, cur) => {
    //     return acc + cur;
    //   }, 1) ** 2;

    // 정답
    squareValue =
      num_list.reduce((acc, cur) => {
        return acc + cur;
      }, 0) ** 2;

    return multiplicationValue < squareValue ? 1 : 0;
  }
}

solution([3, 4, 5, 2, 1]);
