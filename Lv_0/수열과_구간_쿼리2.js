// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.

// 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
// 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.

function solution(arr, queries) {
  const result = [];
  for (const [s, e, k] of queries) {
    let minValue = Infinity; // 양의 무한대

    for (let i = s; i <= e; i++) {
      console.log({ i });
      if (arr[i] > k && arr[i] < minValue) {
        minValue = arr[i];
      }
    }

    if (minValue === Infinity) {
      result.push(-1); // 조건을 만족하는 수가 없다면 -1
    } else {
      result.push(minValue); // 찾은 값 중 가장 작은 수
    }
  }

  console.log(result);
}

// 0 <= i <= 4 인 모든 i에 대해 2보다 크면서 가장 작은 값 arr[i]를 찾기
// 답이 없으면 -1 반환
solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
  ]
); // [(3, 4, -1)];
