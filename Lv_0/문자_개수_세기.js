// 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때,
// my_string에서 'A'의 개수,
// my_string에서 'B'의 개수,...,
// my_string에서 'Z'의 개수,
// my_string에서 'a'의 개수,
// my_string에서 'b'의 개수,...,
// my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string) {
  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"];

  const countArr = new Array(52).fill(0);

  for (const char of my_string) {
    const index = alphabet.indexOf(char);

    if (index !== -1) {
      countArr[index]++;
    }
  }

  console.log(countArr);
  return countArr;
}

solution("Programmers");
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]

// 0을 가진 배열 52개를 생성 후, 알파벳 인덱스를 추출하여 해당 배열 카운트를 늘려주는 것이 문제 해결 핵심
