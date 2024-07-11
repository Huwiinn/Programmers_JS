// 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다.
// my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// 1. index_list 배열에 있는 정수를 추출한다.
// 2. my_string 문자열을 하나의 문자로 잘라낸다. (배열로)
// 3. my_string 문자 배열에 index_list의 정수를 인덱스로 접근한다.
// 4. 새로운 배열을 생성하고. 문자열로 합친다.

function solution(my_string, index_list) {
  let result = index_list.map((v) => my_string[v]).join("");

  return result;
}

solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]);
