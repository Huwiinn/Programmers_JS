// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다.
// 아이스 아메리카노는 한잔에 5,500원입니다.
// 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때,
// 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 배열의 첫 번째 인덱스에는 잔, 두 번째 인덱스에는 거스름 돈이 들어가야한다.

// function solution(money) {
//   const iceAmericano = 5500;

//   const glass = Math.floor(money / iceAmericano);
//   let change;

//   if (money % iceAmericano >= 0) {
//     change = money % iceAmericano;
//     const result = [glass, change];
//     console.log("result : ", result);
//     return result;
//   } else {
//     return alert("사먹을 수 없습니다.");
//   }
// }

// solution(15000);

// 다른 풀이
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
