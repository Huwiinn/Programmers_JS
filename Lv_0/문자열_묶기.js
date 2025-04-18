// 문자열 배열 strArr이 주어집니다.
// strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

// 1. 원소 길이가 같은 것들을 그룹화해야한다. => 하나의 객체 안에서 길이에 따른 그룹화?
// 2. 해당 객체 내부 배열의 길이 중, 최댓값 출력

function solution(strArr) {
  let obj = {};

  for (let str of strArr) {
    obj[str.length] = obj[str.length] || [];
    // console.log("------obj : ", obj);
    obj[str.length].push(str);
  }

  const valuesArr = Object.values(obj).map((item) => item.length);

  console.log(...valuesArr);
  console.log(Math.max(...valuesArr));

  return Math.max(...valuesArr);
}

solution(["a", "bc", "d", "efg", "hi"]); // 2

// 리팩토링 코드

// function solution(strArr) {
//   let obj = {};

//   for (let str of strArr) {
//     obj[str.length] = obj[str.length] ?? [];  // `||` 대신 `??` 사용 가능
//     obj[str.length].push(str);
//   }

//   const valuesArr = Object.values(obj).map((item) => item.length);
//   const maxGroupSize = Math.max(...valuesArr);

//   return maxGroupSize;
// }
