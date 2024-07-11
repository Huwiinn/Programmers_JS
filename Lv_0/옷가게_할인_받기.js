// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요

// 10만원 이상 사면 5% 할인, 30만원 이상 10%할인, 50만원 이상 20%할인

// 소수점 이하를 버린 정수를 return합니다.
// 반올림하는 round가 아닌 완전 버림하는 floor를 사용해야한다.

function solution(price) {
  if (price < 100000) {
    return price;
  } else if (price >= 100000 && price < 300000) {
    console.log(Math.floor(price * 0.95));
    return Math.floor(price * 0.95);
  } else if (price >= 300000 && price < 500000) {
    console.Math.floor(price * 0.9);
    return Math.floor(price * 0.9);
  } else if (price >= 500000) {
    console.log(Math.floor(price * 0.8));
    return Math.floor(price * 0.8);
  }
}

solution(100030);
