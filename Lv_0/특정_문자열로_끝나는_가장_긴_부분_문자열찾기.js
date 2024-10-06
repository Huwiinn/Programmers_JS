// 문자열 myString과 pat가 주어집니다.
// myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.

function solution(myString, pat) {
  const findIdx = myString.lastIndexOf(pat);

  if (findIdx === -1) {
    return "";
  }

  return myString.slice(0, findIdx + pat.length);
}

solution("AbCdEFG", "dE"); // "AbCdE"
solution("AAAAaaaa", "a"); // "AAAAaaaa"
solution("AAaAAabaaab", "b"); // "AAaAAaaaab"

// lastIndexOf 메서드를 사용하면 쉽게 풀 수 있음.
