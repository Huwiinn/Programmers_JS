// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ n ≤ 100

// 입출력 예
// n	result
// 6	1
// 10	5
// 4	2

function solution(n) {
  let piece = 6; // 피자 한 판의 조각 개수

  while (true) {
    console.log({ piece });
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }
  console.log(piece / 6);
  return piece / 6; // 피자 조각을 한 판으로 변환 (30조각 / 6명 === 5판)
}
solution(4);

// 한 판에 6조각
// n명이 한 판을 먹었을 때, 남는 것이 없어야 함
// 6 * n해서 나온 값을 2로 나눠 0일 때, 해당 값을 출력

// function solution(n) {
//   let pizza = 1; // 피자 한 판

//   while ((pizza * 6) % n) {
//     pizza++;
//   }
//   console.log(pizza);
// }
// solution(10);
