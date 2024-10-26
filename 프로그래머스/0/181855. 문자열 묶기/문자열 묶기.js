function solution(strArr) {
  let obj = {};

  for (let str of strArr) {
    obj[str.length] = obj[str.length] || [];
    if ([str.length]) {
      obj[str.length].push(str);
    }
  }

  const valuesArr = Object.values(obj).map((item) => item.length);
    
  return Math.max(...valuesArr);
}