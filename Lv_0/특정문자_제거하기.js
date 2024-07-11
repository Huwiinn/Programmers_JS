//Q. 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
// my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

//  function solution(my_string, letter) {
//   let myString = my_string.split("");
//   // console.log(myString);

//   for (let i = 0; i < myString.length; i++) {
//     if (myString[i] === letter) {
//       myString[i] = "";
//     }
//   }
//   console.log(myString.join(""));
//   return myString.join("");
// }

// let my_string = "abcdef";

// 대표적인 다른 풀이 두 가지
// 1. replaceAll() 사용
// function solution(my_string, letter) {
//   return my_string.replaceAll(letter, "");
// }

// 2. split(), join() 사용
function solution(my_string, letter) {
  let splitString = my_string.split(letter); // split의 기준으로 받은 매개변수를 기준으로 분리되고, 매개변수에 해당하는 문자열은 사라진다.
  console.log("splitString : ", splitString);
  let result = my_string.split(letter).join(""); // split의 인자를 기준으로 분리 => 배열로 반환
  console.log(result);
  return result;
}

solution("abcfe", "a");
