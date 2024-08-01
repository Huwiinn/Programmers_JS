// 정수 리스트 num_list와 정수 n이 주어질 때,
// num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.

// 문제 접근
// 1. n번째 원소 이후의 배열을 생성
// 2. 첫 번째부터 n번째 까지의 배열을 생성
// 3. 1번과 2번의 배열을 합친다.

function solution(num_list, n) {
  const frontArr = num_list.slice(n);
  const backArr = num_list.slice(0, n);

  return frontArr.concat(backArr);
}

solution([5, 2, 1, 7, 5], 3); // [7, 5, 5, 2, 1]

// 다른 풀이 1. splice 메서드를 사용
// 원본 배열을 변경하는 데, 좋은 방법일까 하는 고민
// 불변성을 지켜야한다면 사용하지 말아야하고, 그렇지 않다면 splice 메서드 사용은 좋은 선택.
// splice => 배열의 특정 요소를 제거하거나 추가할 때 주로 사용한다.

// function solution(num_list, n) {
//     num_list.push(...num_list.splice(0, n));
//     return num_list
// }

// 다른 풀이 2. 내 풀이를 한줄로 요약 가능함.
// function solution(num_list, n) {
//     return num_list.slice(n).concat(num_list.slice(0,n));
// }
