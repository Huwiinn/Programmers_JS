// 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  console.log(num_list.includes(n));
  if (num_list.includes(n)) {
    return 1;
  } else {
    return 0;
  }
  // return num_list.includes(n);
}

solution([1, 2, 3, 4], 3);
