// 0과 1로만 이루어진 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk을 만드려고 합니다.

// i의 초기값을 0으로 설정하고 i가 arr의 길이보다 작으면 다음을 반복합니다.

// 만약 stk이 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
// stk에 원소가 있고, stk의 마지막 원소가 arr[i]와 같으면 stk의 마지막 원소를 stk에서 제거하고 i에 1을 더합니다.
// stk에 원소가 있는데 stk의 마지막 원소가 arr[i]와 다르면 stk의 맨 마지막에 arr[i]를 추가하고 i에 1을 더합니다.
// 위 작업을 마친 후 만들어진 stk을 return 하는 solution 함수를 완성해 주세요.

// 단, 만약 빈 배열을 return 해야한다면 [-1]을 return 합니다.

// stk 빈배열 => arr[i]를 stk에 추가 후, i 증가
// stk 원소 있고 마지막 원소가 arr[i]와 같다 => stk 마지막 원소 제거, i에 1 더한다.
// stk원소 있고, 해당 값이 arr[i]랑 다르면 stk 마지막 원소로 arr[i] 추가하고 i에 1 더함

function solution(arr) {
  const stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      // i++;
    } else if (stk.length >= 1 && stk.at(-1) === arr[i]) {
      stk.pop();
      // i++;
    } else if (stk.length >= 1 && stk.at(-1) !== arr[i]) {
      stk.push(arr[i]);
      // i++;
    }
  }

  return stk.length > 0 ? stk : [-1];
}

// solution([0, 1, 1, 1, 0]); // [0, 1, 0]
// solution([0, 1, 0, 1, 0]); // [0, 1, 0, 1, 0]
solution([0, 1, 1, 0]); // [-1]

// 개선 코드
// function solution(arr) {
//   const stack = [];

//   for (let i = 0; i < arr.length; i++) {
//     const top = stack.at(-1); // 스택의 마지막 원소 참조
//     if (!stack.length || top !== arr[i]) {
//       stack.push(arr[i]); // 스택이 비었거나 다른 값이면 추가
//     } else {
//       stack.pop(); // 같은 값이면 제거
//     }
//   }

//   return stack.length ? stack : [-1];
// }
