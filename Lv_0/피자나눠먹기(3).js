// 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다.
//  피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때,
//  n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

// 1. 최소 한 조각 이상 피자를 먹어야한다. === 나눴을 때 0으로 떨어지면 안된다.

// function solution(slice, n) {
//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     console.log("i : ", i);
//     console.log("for count : ", count);

//     if (i % slice === 0) {
//       count++;
//     }
//   }
//   console.log("count : ", count);
//   return count;
// }

// solution(4, 12);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// Math.ceil을 이용한 알고리즘.
// Math.ceil은 소수점 이하를 '올림'한다.
const solution = (slice, n) => {
  const result = Math.ceil(n / slice);
  console.log("result : ", result);
  return result;
};

solution(4, 21);
