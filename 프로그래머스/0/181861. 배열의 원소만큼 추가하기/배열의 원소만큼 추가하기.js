function solution(arr) {
 const fillArr = arr.map((value) => new Array(value).fill(value));

  return [].concat(...fillArr);
}