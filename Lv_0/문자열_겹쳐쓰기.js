// 문자열 my_string, overwrite_string과 정수 s가 주어집니다.
// 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// my_string와 overwrite_string은 숫자와 알파벳으로 이루어져 있습니다.
// 1 ≤ overwrite_string의 길이 ≤ my_string의 길이 ≤ 1,000 => 무조건 overwrite_string은 존재한다.
// 0 ≤ s ≤ my_string의 길이 - overwrite_string의 길이

function solution(my_string, overwrite_string, s) {
  console.log("my_string.slice(0, s): ", my_string.slice(0, s));
  console.log("overwrite_string: ", overwrite_string);
  console.log(
    "my_string.slice(s + overwrite_string.length): ",
    my_string.slice(s + overwrite_string.length)
  );
  return (
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length)
  );
}

solution("He11oWor1d", "lloWorl", 2); // "HelloWorld"
// solution("Program29b8UYP", "merS123", 7); // "ProgrammerS123"
// solution("aaaaaa", "bbb", 3); // "aaabbb"
