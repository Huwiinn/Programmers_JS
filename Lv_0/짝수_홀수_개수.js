// 정수가 담긴 리스트 num_list가 주어질 때,
// num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(num_list) {
  let evenNumCount = 0;
  let oddNumCount = 0;
  let total = [];

  for (let i = 0; i <= num_list.length; i++) {
    console.log(`${i}번째 배열 숫자 : ", ${num_list[i]}`);
    if (num_list[i] % 2 === 0) {
      ++evenNumCount;
      console.log("evenNumCount : ", evenNumCount);
    } else {
      ++oddNumCount;
      console.log("oddNumCount : ", oddNumCount);
    }
  }
  console.log((total = [evenNumCount, oddNumCount]));
  total = [evenNumCount, oddNumCount];
  return total;
}

solution([1, 2, 3, 4, 5, 10, 20, 30, 40, 58]);
