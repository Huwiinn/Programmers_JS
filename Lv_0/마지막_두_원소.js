// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면
// 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면(크지 않다면 == 같거나 더 작다면)
// 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let lastArrIndexNum = num_list.length - 1;
  let secondLastArrIndexNum = num_list.length - 2;

  let num;

  if (num_list[lastArrIndexNum] > num_list[secondLastArrIndexNum]) {
    num = num_list[lastArrIndexNum] - num_list[secondLastArrIndexNum];
    num_list.push(num);
    return num_list;
  }

  if (num_list[lastArrIndexNum] <= num_list[secondLastArrIndexNum]) {
    num = num_list[lastArrIndexNum] * 2;
    num_list.push(num);
    return num_list;
  }
}

solution([5, 2, 1, 7, 5]);
