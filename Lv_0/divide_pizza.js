function solution(n) {
  let result = n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
  // console.log("result : ", result);

  // let a = n % 7;
  // console.log(a);
  return n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
}

solution(1);
