// 정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다.
// arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.

// 2의 정수 거듭제곱 === 2를 n만큼 제곱한 것
// 즉, 배열의 길이만큼 거듭제곱해라 (2 * ^배열 길이) => 그리고 뒤에 정수 0을 그만큼 추가하라

// 2의 0제곱은 1이다.

function solution(arr) {
  let referenceNum = 1;

  while (referenceNum < arr.length) {
    referenceNum *= 2;
  }

  // 조건: arr.length !== referenceNum는 배열 arr의 길이가 referenceNum과 같지 않다면 참(True)입니다.
  // 즉, 길이가 같아질 때 까지 반복해라
  while (arr.length !== referenceNum) {
    arr.push(0);
    console.log(111, arr);
  }

  console.log({ arr });
  return arr;
}

solution([1, 2, 3, 4, 5, 6]); // 	[1, 2, 3, 4, 5, 6, 0, 0]
solution([58, 172, 746, 89]); // [58, 172, 746, 89]

// 입출력 예 #1
// 예제 1번의 arr의 길이는 6입니다.
// arr의 길이를 2의 정수 거듭제곱으로 만드는 방법은 0을 2개, 10개, 26개,..., 추가하는 방법이 있고 그중 최소한으로 0을 추가하는 방법은 2개를 추가하는 것입니다. 따라서 [1, 2, 3, 4, 5, 6, 0, 0]을 return 합니다.

// 입출력 예 #2
// 예제 2번의 arr의 길이는 4이고 이미 2의 정수 거듭제곱입니다. 따라서 뒤에 0을 추가하지 않아도 되므로 [58, 172, 746, 89]를 return 합니다.

// 다른 풀이
// function solution(arr) {
//   const length = arr.length;
//   const totalLength = 2 ** Math.ceil(Math.log2(length));
//   return [...arr, ...new Array(totalLength - length).fill(0)];
// }
