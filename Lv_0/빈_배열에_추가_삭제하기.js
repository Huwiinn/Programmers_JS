// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다.
// 길이가 같은 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때,
// flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2번 추가하고,
// flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요.

// flag를 차례대로 순회한다.
// flag[i]가 true이면, X 배열에 arr[i]값을 2번 추가
// flag[i]가 false라면 X 배열 마지막 arr[i]개 원소를 제거
function solution(arr, flag) {
  const X = [];

  if (flag) {
    flag.map((bool, idx) =>
      bool
        ? X.push(...Array(arr[idx] * 2).fill(arr[idx]))
        : X.splice(-arr[idx], arr[idx])
    );
  }

  return X;
}

solution([3, 2, 4, 1, 3], [true, false, true, false, false]); // [3, 3, 3, 3, 4, 4, 4, 4]

// splice 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
