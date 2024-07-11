// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
// 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

/**
 * sides의 원소는 자연수입니다.
  sides의 길이는 3입니다.
  1 ≤ sides의 원소 ≤ 1,000
 */

// 가장 큰 변이 나머지 변의 합보다 작아야한다.
// 그렇다면 1, 아니면 2

function solution(sides) {
  let highAngle = 0;
  for (let i = 0; i <= sides.length; i++) {
    if (sides[i] > highAngle) {
      highAngle = sides[i];
    }
  }

  // const lowAngle = sides
  //   .filter((number) => highAngle > number)
  //   .reduce((a, b) => a + b);

  let lowAngleSum = 0;
  lowAngle = sides.forEach((number) => (lowAngleSum += number));
  // console.log(lowAngleSum);

  let result = highAngle < lowAngleSum - highAngle ? 1 : 2;
  console.log(result);
  return highAngle < lowAngleSum - highAngle ? 1 : 2;
}

solution([3, 3, 3]);
