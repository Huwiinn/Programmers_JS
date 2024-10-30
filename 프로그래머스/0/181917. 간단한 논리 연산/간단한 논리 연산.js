function solution(x1, x2, x3, x4) {
  const groupOne = x1 === true || x2 === true ? true : false;
  const groupTwo = x3 === true || x4 === true ? true : false;

  const result = groupOne === true && groupTwo === true ? true : false;

  return result;
}