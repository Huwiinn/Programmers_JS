// 문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

function solution(myString, pat) {
  let count = 0;

  // 문자열의 길이에서 pat의 길이를 뺀 만큼만 반복
  for (let i = 0; i <= myString.length - pat.length; i++) {
    console.log({ i });
    // 부분 문자열이 pat과 일치하면 count를 증가
    if (myString.slice(i, i + pat.length) === pat) {
      count++;
    }
  }

  console.log(count);
  return count;
}

solution("banana", "ana"); // 2
