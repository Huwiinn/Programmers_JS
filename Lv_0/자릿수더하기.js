// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
  let numberArr = n // 함수 인자로 받은 n을 넘버타입으로 변환하여 배열에 넣어줍니다.
    .toString()
    .split("")
    .map((num) => parseInt(num));

  return numberArr.reduce((acc, cur) => (addNum = acc + cur)); // 배열에 넣어준 넘버타입 숫자들을 reduce함수를 이용하여 더해준 뒤, 반환합니다.
}

solution(1234);
solution(930211);
