// 문자열 my_string이 매개변수로 주어집니다.
// my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 1. 빈 배열을 생성 후, split으로 문자열을 쪼갠 배열을 생성한다.
// 2. split으로 쪼갠 배열을 map으로 돌고, item을 숫자형으로 바꿔서 push한다. 아닌 것들은 NaN으로 들어간다.
// 3. 숫자를 담는 배열을 생성한다. 2번에서 생성된 배열에 filter 메소드를 이용하여 item이 Number가 맞는 것들만 추린다.
// 4. reduce함수로 더하는 작업을 한다.

function solution(my_string) {
  let splitArr = [];
  my_string.split("").map((item) => splitArr.push(Number(item)));
  console.log({ splitArr });

  let numArr = splitArr.filter((item) => item === Number(item));
  console.log({ numArr });

  let result = numArr.reduce((a, b) => a + b);
  console.log({ result });

  return result;
}

solution("aAb1B2cC34oOp"); // 10
