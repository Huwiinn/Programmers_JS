// boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때,
// 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.

function solution(x1, x2, x3, x4) {
  const groupOne = x1 === true || x2 === true ? true : false;
  const groupTwo = x3 === true || x4 === true ? true : false;

  // console.log("groupOne : ", groupOne);
  // console.log("groupTwo : ", groupTwo);

  const result = groupOne === true && groupTwo === true ? true : false;

  // console.log("result : ", result);
  return result;
}

// solution(false, true, true, true); // true
solution(true, false, false, false); // false
