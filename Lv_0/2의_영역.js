// 정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.

// 단, arr에 2가 없는 경우 [-1]을 return 합니다.

// function solution(arr) {
//   const firstFindIdx = arr.find((num) => num === 2) - 1;
//   const lastFindIdx = arr.findLastIndex((num) => num === 2) + 1;

//   const result = arr.slice(firstFindIdx, lastFindIdx);

//   if (result.length < 1) {
//     return -1;
//   } else {
//     return result;
//   }
// }

function solution(arr) {
  const firstFindIdx = arr.indexOf(2); // 첫 번째로 2가 등장하는 인덱스
  const lastFindIdx = arr.lastIndexOf(2); // 마지막으로 2가 등장하는 인덱스

  // 2가 배열에 없는 경우 [-1] 반환
  if (firstFindIdx === -1) {
    return [-1];
  }

  // 2가 존재하는 연속된 부분 배열 반환
  return arr.slice(firstFindIdx, lastFindIdx + 1);
}

solution([1, 2, 1, 4, 5, 2, 9]); // [2, 1, 4, 5, 2]
solution([1, 2, 1]); // [2]
solution([1, 1, 1]); // [-1]
solution([1, 2, 1, 2, 1, 10, 2, 1]); // [2, 1, 2, 1, 10, 2]

// 조건에 맞는 배열 마지막 요소 찾기 findLastIndex 메서드 사용.
