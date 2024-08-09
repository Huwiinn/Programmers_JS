// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

// 접근방식
// 1. my_string 길이는 is_suffix보다 길어야 함
// 2. is_suffix는 my_string 뒤에서 일치한다면 1을 반환하고, 아니면 0을 반환해야 한다.
// 2-1. 뒤에서 일치한다 === 문자열을 반대로 변환하고 앞에서부터 판단한다

function solution(my_string, is_suffix) {
  if (my_string.length >= is_suffix.length) {
    console.log("-----------", [...is_suffix].reverse().join(""));
    console.log("-----------", [...is_suffix].reverse().join(""));

    console.log(
      [...my_string]
        .reverse()
        .join("")
        .startsWith([...is_suffix].reverse().join(""))
        ? 1
        : 0
    );
    return [...my_string]
      .reverse()
      .join("")
      .startsWith([...is_suffix].reverse().join(""))
      ? 1
      : 0;
    // [...my_string].reverse().join("").includes(is_suffix) ? 1 : 0;
  } else {
    return 0;
  }
}

solution("banana", "ana"); // 1
// solution("banana", "nan"); // 0
// solution("banana", "wxyz"); // 0
// solution("banana", "abanana"); // 0

// 다른 풀이

// 1번
const solution = (str, suff) => (str.endsWith(suff) ? 1 : 0);

// 2번
function solution(my_string, is_suffix) {
  return my_string.slice(my_string.length - is_suffix.length) === is_suffix
    ? 1
    : 0;
}
