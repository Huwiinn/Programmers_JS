// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.
// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

// 쿼리배열 구간에 해당하는 숫자를 +1 해줘야한다.
// 접근 1. 2차원 배열인 queries를 먼저 돈다.
// 접근 2. 2차원 배열 한 겹을 벗겨서 나온 배열들을 map으로 돌린다
// 접근 3. map으로 돌린 배열 값들을 arr 배열 인덱스로 사용하고, 해당 인덱스들에 +1 한다.

// ⬆️ 잘 못된 문제 풀이임..
// 해당 문제는 배열 구조 분해를 통하여 시작 인덱스와 끝 인덱스를 쉽게 지정할 수 있다.

function solution(arr, queries) {
  for (let query of queries) {
    const [s, e] = query;
    console.log(s, e);

    for (let i = s; i <= e; i++) {
      arr[i] += 1;
    }
    // query.map((v, i) => (arr[v] += 1));
  }

  return arr;
}

solution(
  [0, 1, 2, 3, 4],
  [
    [0, 1],
    [1, 2],
    [2, 3],
  ]
); // [1, 3, 4, 4, 4]
