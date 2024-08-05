// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

// findIndex 메서드는 조건에 해당하지 않으면 -1을 반환한다.
function solution(num_list) {
  return num_list.findIndex((num) => num < 0);
}

// solution([12, 4, 15, 46, 38, -2, 15]); // 5
// solution([13, 22, 53, 24, 15, 6, 0]); // -1
solution([-1, 2, 3, 4, 5, 6]); // 0
