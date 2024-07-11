// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// a정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
// 최빈값이 여러 개면 -1을 return 합니다.

// 풀이 생각 정리
/**
 * - 해당 배열에서 자주 나오는 숫자를 반환해야함.
 * - 인자로 받은 배열을 정렬시킨다.
 * - 반복문으로 배열을 돌면서 이전 값과 현재값이 같으면 빈 배열에 배열로 묶어준다. [ [], [], [] ] 중첩배열로
 * - 중첩배열이 되었으면, 중첩배열의 length를 검사하고, 제일 긴 중첩 배열 인덱스를 찾는다.
 * - 해당 인덱스 배열의 0번째 번호를 반환한다.
 * - 만약 길이가 같은 인덱스가 최종적으로 2개 이상이 나오면, -1을 반환하게 한다.
 *  */

function solution(array) {
  let sortedArr = array.sort((a, b) => a - b);
  let multiplyArr = [];
  console.log(sortedArr);

  for (let numArr of sortedArr) {
    sortedArr.reduce((prev, recent) => {
      if (prev === recent) {
        multiplyArr.push([recent]);
      }
    });
  }
  console.log({ multiplyArr });
  // return result;
}

solution([1, 2, 1, 3, 3, 4, 3, 3]);
