// 랜덤으로 서로 다른 k개의 수를 저장한 배열을 만드려고 합니다.
// 적절한 방법이 떠오르지 않기 때문에 일정한 범위 내에서 무작위로 수를 뽑은 후, 지금까지 나온적이 없는 수이면 배열 맨 뒤에 추가하는 방식으로 만들기로 합니다.
// 이미 어떤 수가 무작위로 주어질지 알고 있다고 가정하고, 실제 만들어질 길이 k의 배열을 예상해봅시다.
// 정수 배열 arr가 주어집니다. 문제에서의 무작위의 수는 arr에 저장된 순서대로 주어질 예정이라고 했을 때,
// 완성될 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, 완성될 배열의 길이가 k보다 작으면 나머지 값을 전부 -1로 채워서 return 합니다.

// 정수 배열 arr에서 무작위 수가 주어진다
// 배열 길이가 k보다 작으면 나머지 값은 -1로 반환
// 중복을 제외해야함

// function solution(arr, k) {
//   let prevValue = undefined;

//   const filteredArr = arr.filter((num) => {
//     if (num === prevValue) {
//       // 현재 값이 이전 값과 같으면 필터링 (제외)
//       return false;
//     }
//     // 이전 값을 업데이트하고 포함
//     prevValue = num;
//     return true;
//   });

//   while (filteredArr.length < k) {
//     filteredArr.push(-1);
//   }

//   let flag = filteredArr.length < k;
//   console.log(filteredArr.slice(0, k));
//   return flag ? filteredArr.slice(0, k) : filteredArr;
// }

function solution(arr, k) {
  const filteredArr = [];

  for (const num of arr) {
    if (!filteredArr.includes(num)) {
      filteredArr.push(num);
    }

    if (filteredArr.length === k) break;
  }

  // 부족한 자리 -1로 채우기
  while (filteredArr.length < k) {
    filteredArr.push(-1);
  }

  return filteredArr;
}

solution([0, 1, 1, 2, 2, 3], 3); //[0, 1, 2]
solution([0, 1, 1, 1, 1], 4); //[0, 1, -1, -1]

// set을 사용하여 중복 제거를 할 수 있음..
// 예시코드
// const solution = (arr, k) => {
//   const set = new Set(arr);
//   const result = [...set].slice(0, k);
//   while (result.length !== k) {
//     result.push(-1);
//   }
//   return result;
// };
