function solution(arr) {
  const stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      // i++;
    } else if (stk.length >= 1 && stk.at(-1) === arr[i]) {
      stk.pop();
      // i++;
    } else if (stk.length >= 1 && stk.at(-1) !== arr[i]) {
      stk.push(arr[i]);
      // i++;
    }
  }
  
  return stk.length > 0 ? stk : [-1];
}