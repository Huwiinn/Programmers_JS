// 정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때,
// 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

function solution(num_list) {
  const oddSumArr = []; // 홀수
  const evenSumArr = []; // 짝수

  if (num_list) {
    num_list.map((v, i) =>
      i % 2 === 0 ? evenSumArr.push(v) : oddSumArr.push(v)
    );
  }

  const oddSumNum = oddSumArr.reduce((acc, cur) => acc + cur, 0);
  const evenSumNum = evenSumArr.reduce((acc, cur) => acc + cur, 0);

  return oddSumNum > evenSumNum ? oddSumNum : evenSumNum;
}

solution([4, 2, 6, 1, 7, 6]); // 17
