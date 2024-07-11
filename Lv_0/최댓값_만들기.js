// 정수 배열 numbers가 매개변수로 주어집니다.
//  numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  numbers.sort(function (a, b) {
    return b - a;
  });

  let MAX_NUM, SECOND_NUM;

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    MAX_NUM = numbers[0];
    SECOND_NUM = numbers[1];

    return MAX_NUM * SECOND_NUM;
  }
}

// 더 간결한 코드

function solution(numbers) {
  numbers.sort((a, b) => {
    return b - a;
  });
  return numbers[0] * numbers[1];
}

solution([1, 31, 10, 24, 1, 50]);
