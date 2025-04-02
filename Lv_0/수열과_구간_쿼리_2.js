// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.

// 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
// 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.

function solution(arr, queries) {
  let resultArr = [];

  for (const [s, e, k] of queries) {
    let smallestNumber = Infinity;

    for (let i = s; i <= e; i++) {
      // arr[i]가 k보다 클 때만
      if (k < arr[i] && arr[i] < smallestNumber) {
        smallestNumber = arr[i];
        console.log(11111, smallestNumber);
        console.log(arr[i]);
        console.log({ i });
      }
    }
    console.log("----------------------------------------");
    console.log(22222, smallestNumber);
    // k < arr[i] 조건을 만족하지 못하면 smallestNumber는 Infinity값을 유지
    resultArr.push(smallestNumber === Infinity ? -1 : smallestNumber);
  }

  return resultArr;
}

solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
  ]
); // [3, 4, -1]

// Infinity를 초기값으로 사용하는 것은 효율적입니다. 그 이유는 다음과 같습니다:
// 	1.	단일 비교로 후보 업데이트:
// Infinity는 모든 실수보다 큰 특별한 숫자이므로, 조건을 만족하는 첫 번째 값이 반드시 Infinity보다 작게 되어 후보 값으로 바로 업데이트됩니다. 초기값이 Infinity이면, 별도의 “초기값 설정 여부”를 확인할 필요 없이 단순 비교로 처리할 수 있습니다.
// 	2.	불필요한 조건문 제거:
// 만약 null이나 undefined로 초기화할 경우, 첫 번째 값을 대체할 때 별도의 조건(예: 후보 값이 설정되어 있는지 확인)을 추가로 체크해야 할 수 있습니다. Infinity를 사용하면 이런 추가 조건문 없이 바로 비교할 수 있어 코드가 간결해지고, 미세하지만 성능 면에서도 이점이 있습니다.
// 	3.	가독성과 유지보수성:
// 코드가 명확해지면서, “Infinity보다 작은 값을 찾는다”라는 논리 자체가 직관적으로 이해되므로, 추후 유지보수나 디버깅 시에도 도움이 됩니다.

// 즉, Infinity를 사용하면 비교 연산이 간단해지고 불필요한 분기 처리를 줄일 수 있어 코드의 효율성과 가독성이 높아집니다.
