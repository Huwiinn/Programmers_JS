// 내 풀이
// function solution(dot) {
//   if (dot[0] > 0 && dot[1] > 0) {
//     result = 1;
//     return console.log(result);
//   } else if (dot[0] < 0 && dot[1] > 0) {
//     result = 2;
//     return console.log(result);
//   } else if (dot[0] < 0 && dot[1] < 0) {
//     result = 3;
//     return console.log(result);
//   } else {
//     result = 4;
//     return console.log(result);
//   }
// }

// solution([7, -9]);

// 다른 풀이, 내가 생각했을 때 제일 베스트 답안

function solution(dot) {
  const [num1, num2] = dot;
  const check = num1 * num2 > 0;
  return num1 > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
