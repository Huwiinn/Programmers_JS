//  정수 배열 arr가 주어집니다.
//  arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다.
//  그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.

function solution(arr) {
  return arr.map((v) =>
    v >= 50 && v % 2 === 0 ? v / 2 : v < 50 && v % 2 === 1 ? v * 2 : v
  );
}

solution([1, 2, 3, 100, 99, 98]); //[2, 2, 6, 50, 99, 49]

// 괄호를 묶어서 어느 조건을 기준으로 하는지 가독성 향상
// function solution(arr) {
//     return arr.map((v) =>
//       (v >= 50 && v % 2 === 0) ? v / 2 : (v < 50 && v % 2 === 1) ? v * 2 : v
//     );
//   }

// 다른 풀이
// function solution(arr) {
//     return arr.map(num => {
//         if(num >= 50 && !(num % 2)) return num / 2;
//         if(num < 50 && num % 2) return num * 2;
//         return num;
//     })
// }

// map 함수 콜백 내부에서 if문 작성 가능.
