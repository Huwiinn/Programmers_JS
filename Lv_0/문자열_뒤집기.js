// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때,
// my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, s, e) {
  const replacedChar = [...my_string.slice(s, e + 1)].reverse().join("");

  const changeChar = my_string.slice(s, e + 1);

  const result = my_string.replace(changeChar, replacedChar);
  console.log({ result });
  return result;

  // ⬇️ substring 메서드를 이용한 다른 풀이
  // const char = my_string.substring(s, e + 1);
  // const reverseChar = [...my_string.substring(s, e + 1)].reverse().join("");

  // console.log(my_string.replace(char, reverseChar));
}

solution("Progra21Sremm3", 6, 12); // ProgrammerS123
solution("Stanley1yelnatS", 4, 10); // Stanley1yelnatS

// substring - string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환한다.
