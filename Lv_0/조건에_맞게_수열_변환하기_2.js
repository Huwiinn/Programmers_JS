// 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.

// 이러한 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때, arr(x) = arr(x + 1)인 x가 항상 존재합니다. 이러한 x 중 가장 작은 값을 return 하는 solution 함수를 완성해 주세요.

// 단, 두 배열에 대한 "="는 두 배열의 크기가 서로 같으며, 같은 인덱스의 원소가 각각 서로 같음을 의미합니다.

// 정수 배열이 주어진다.
// 각 원소 값이 50 이상이면 2로 나눈다. 50 미만 홀수면 2를 곱하고 다시 1을 더한다.
// 위 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현. 가장 작은 값을 return 하는 solution 함수를 완성

// function solution(arr) {
//   let comparisonA = [];
//   let comparisonB = [];
//   let firstForLoop = false;
//   let loopCount = 0;

//   // 최초 한 번만 실행
//   if (firstForLoop === false) {
//     for (const num of arr) {
//       if (num >= 50) {
//         comparisonA.push(num / 2);
//         loopCount += 1;
//       } else if (num < 50 && num % 2 === 1) {
//         comparisonA.push(num * 2 + 1);
//         loopCount += 1;
//       }
//     }
//   }

//   if (comparisonA.length > 0 && firstForLoop === false) {
//     comparisonB = [...comparisonA];

//     for (const num of comparisonA) {
//       if (num >= 50) {
//         comparisonA.push(num / 2);
//         loopCount += 1;
//       } else if (num < 50 && num % 2 === 1) {
//         comparisonA.push(num * 2 + 1);
//         loopCount += 1;
//       }
//     }
//     firstForLoop = true;
//   }

//   if (comparisonA[0] !== comparisonB[0]) {
//     comparisonB = [...comparisonA];
//     comparisonA = [];

//     for (const num of comparisonA) {
//       if (num >= 50) {
//         comparisonA.push(num / 2);
//         loopCount += 1;
//       } else if (num < 50 && num % 2 === 1) {
//         comparisonA.push(num * 2 + 1);
//         loopCount += 1;
//       } else if (comparisonA[0] === comparisonB[0]) {
//         return loopCount;
//       }
//     }
//   }

//   console.log({ comparisonA });
//   console.log({ comparisonB });
// }

// solution([1, 2, 3, 100, 99, 98]);

// 정수 배열이 주어진다.
// 각 원소 값이 50 이상이면 2로 나눈다. 50 미만 홀수면 2를 곱하고 다시 1을 더한다.
// 위 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현. 가장 작은 값을 return 하는 solution 함수를 완성

function practiceSolution(arr) {
  let loopCount = 0; // 반복 횟수
  let current = [...arr]; // 현재 배열
  let next = []; // 다음 배열 상태

  while (true) {
    next = current.map((num) => {
      if (num >= 50 && num % 2 === 0) {
        return num / 2;
      } else if (num < 50 && num % 2 === 1) {
        return num * 2 + 1;
      } else {
        return num;
      }
    });

    if (current.every((value, idx) => value === next[idx])) {
      break;
    }

    current = next;
    loopCount++;
  }

  return loopCount;
}

function solution(arr) {
  let loopCount = 0; // 반복 횟수를 기록
  let current = [...arr]; // 현재 배열 상태
  let next = []; // 다음 단계의 배열 상태

  while (true) {
    // 현재 배열 상태에서 다음 배열 상태를 계산
    next = current.map((num) => {
      if (num >= 50 && num % 2 === 0) {
        return num / 2; // 50 이상이고 짝수면 2로 나눈다
      } else if (num < 50 && num % 2 === 1) {
        return num * 2 + 1; // 50 미만이고 홀수면 2를 곱하고 1을 더한다
      }
      return num; // 그 외의 경우는 그대로 유지
    });

    // 현재 배열과 다음 배열이 같다면 종료
    if (current.every((value, index) => value === next[index])) {
      break;
    }

    // 반복 횟수 증가 및 배열 상태 갱신
    current = next;
    loopCount++;
  }

  return loopCount; // 반복 횟수를 반환
}

// 테스트 케이스
console.log(solution([1, 2, 3, 100, 99, 98])); // 6
console.log(solution([50, 51, 52])); // 1
console.log(solution([1, 1, 1])); // 4
console.log(solution([2, 4, 6, 8])); // 0
