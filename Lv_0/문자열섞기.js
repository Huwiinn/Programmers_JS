//길이가 같은 두 문자열 str1과 str2가 주어집니다.

//두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

function solution(str1, str2) {
  // map 함수에서 두 번째 인수값은 index이다.
  console.log([...str1].map((a, index) => a + str2[index]).join(""));
  return [...str1].map((a, index) => a + str2[index]).join("");
}

solution("aaaaa", "bbbbb");
