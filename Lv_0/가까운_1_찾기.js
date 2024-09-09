// 정수 배열 arr가 주어집니다.
// 이때 arr의 원소는 1 또는 0입니다.
// 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.

// 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.

function solution(arr, idx) {
  console.log(arr.indexOf(1, idx));
  return arr.indexOf(1, idx);
}

solution([0, 0, 0, 1], 1); // 3
solution([1, 0, 0, 1, 0, 0], 4); // -1
solution([1, 1, 1, 1, 0], 3); // 3

// indexOf 메서드는 배열에서 원하는 숫자가 어느 인덱스에 있는지 알려주는 메서드이다.
// 해당 풀이에서 indexOf(1, idx)는 배열에서 idx 위치부터 1을 찾아주는 것이다.
// indexOf(searchElement, fromIndex) => indexOf(찾는 요소, 시작 인덱스)
