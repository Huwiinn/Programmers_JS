// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

// 1. my_string을 배열로 변형
// 2. (n-1)을 하여 배열 slice
// 3. 이후 join("");

function solution(my_string, n) {
  let result = my_string.split("").slice(-n).join("");

  return result;
}

solution("ProgrammerS123", 11); // grammerS123

// 최적의 답안
// function solution(my_string, n) {
//   let result = my_string.slice(-n);

//   console.log(111, result);

//   return result;
// }
