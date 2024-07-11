// function solution(my_string) {
// 1. split() 메서드를 사용하여 새 배열을 반환한다.
//   let splitString = my_string.split("");
// 2. reverse() 메서드를 사용하여 새 배열의 순서를 뒤집는다.
//   let reverseString = splitString.reverse();
// 3. join() 메서드를 사용하여 배열의 모든 요소를 문자열로 결합한다. 이 때 join("") 처럼 따옴표를 안 넣어주면 한 단어씩 쉼표로 끊어져서 출력된다.
//   let joinString = reverseString.join("");
//   console.log("splitString : ", splitString);
//   console.log("reverseString : ", reverseString);
//   console.log("joinString : ", joinString);

//   return joinString;
// }

// solution("Hello");

// 세 메서드를 한 줄에 작성하기
// function reverseString(my_string) {
// 해석 : my_string의 문자를 자르고 새 배열을 반환하고, 배열의 문자열을 뒤집고, 하나로 합친다.
//   let result = my_string.split("").reverse().join("");
//   return console.log(result);
// }

// reverseString("Hello");

// 내림차순으로 반복하는 for문으로 문자열 반전하기

function reverseString(my_string) {
  // 1. 새로 생성될 문자열을 담을 빈 문자열을 만든다.
  let newString = "";

  // 2. for문 작성
  /* 반복문의 시작점은 문자열의 마지막 문자 "o"의 인덱스인 (my_string.length - 1)이다.
      i가 0보다 크거나 같은 한 코드는 반복적으로 수행된다. 코드가 반복될 때 마다 i의 값을 줄인다.
  */
  for (let i = my_string.length - 1; i >= 0; i--) {
    newString += my_string[i];
  }

  // 3. 반전된 문자열 반환
  return console.log("newString : ", newString);
}

reverseString("Hello");
