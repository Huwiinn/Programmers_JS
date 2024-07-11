// 정수 배열 arr과 정수 n이 매개변수로 주어집니다.
// arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을,
// arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.

// 1. 배열의 길이가 짝수인지 홀수인지 판별한다. (0도 짝수 인덱스로 취급한다.)
// 2. 배열을 돌면서 n을 더해준다. 홀수라면 index 0,2,4... | 짝수라면 index 1,3,5...

function solution(arr, n) {
  const result =
    arr.length % 2 === 0
      ? arr.map((num, idx) => (idx % 2 === 0 ? num : num + n))
      : arr.map((num, idx) => (idx % 2 !== 0 ? num : num + n));

  console.log(result);
}

solution([49, 12, 100, 276, 33], 27); // [76, 12, 127, 276, 60]

// 다른 풀이

// 1.
// function solution(arr, n) {
//   const result = arr.map((num, idx) => {
//     if (arr.length % 2 === 0) {
//       // 배열의 길이가 짝수일 때
//       return idx % 2 !== 0 ? num + n : num;
//     } else {
//       // 배열의 길이가 홀수일 때
//       return idx % 2 === 0 ? num + n : num;
//     }
//   });

//   return result;
// }

// console.log(solution([49, 12, 100, 276, 33], 27)); // [76, 12, 127, 276, 60]

// ----------------------------------------------------------------------------------

// 2.
// const solution = (arr, n) => arr.map((num, idx) => (
//     arr.length % 2 !== idx % 2
//     ? num + n
//     : num
// ))
