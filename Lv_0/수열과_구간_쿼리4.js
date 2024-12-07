// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.
// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

// 첫 번째 쿼리 범위 예시 :
// 0 =< index <= 4 일 때, 첫 번째 매개변수인 arr[i]에 1을 더해야함
function solution(arr, queries) {
  for (const [s, e, k] of queries) {
    console.log({ s });
    console.log({ e });
    console.log({ k });
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        // 인덱스랑 k랑 나눴을 때, 0이여야 인덱스가 k의 배수임
        arr[i] += 1;
      }
    }
  }
  console.log(arr);
  return arr;
}

solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 1],
    [0, 3, 2],
    [0, 3, 3],
  ]
); // [3, 2, 4, 6, 4]

// reduce 메서드를 활용한 다른 풀이
// function solution(arr, queries) {
//     return queries.reduce((bucket, [s, e, k]) => {
//         for (let i = s; i <= e; i += 1) {
//             if (i % k === 0) bucket[i] += 1
//         }
//         return bucket
//     }, [...arr])
// }
