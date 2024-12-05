// 두 정수 q, r과 문자열 code가 주어질 때,
// code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// 0 ≤ r < q ≤ 20
// r < code의 길이 ≤ 1,000
// code는 영소문자로만 이루어져 있습니다.

// q로 code의 index를 나눔
// index와 r이 같은 것을 배열로 모아놓음
// 문자열로 합쳐서 반환.

function solution(q, r, code) {
  const codeIndex = [...code].map((_, idx) => idx);
  const indexDivideQ = codeIndex.map((idxNumber) => idxNumber % q);
  const resultArr = indexDivideQ.map((num, idx) =>
    num === r ? [...code][idx] : ""
  );

  const result = resultArr.join("");
  return result;
}

solution(3, 1, "qjnwezgrpirldywt"); // "jerry"
solution(1, 0, "programmers"); // "programmers"

// 다른 풀이

// function solution(q, r, code) {
//   return [...code].filter((_, i) => i % q === r).join('');
// }
