// 단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때,
// my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// 1. 문자열을 공백을 기준으로 배열로 만든다
// 2. filter 함수를 사용하여 공백이 아닌 것듦만 추출한다.

function solution(my_string) {
  const result = my_string.split(" ").filter((v) => v !== "");

  console.log(result);
  return result;
}

solution(" i    love  you"); // ["i", "love", "you"]
