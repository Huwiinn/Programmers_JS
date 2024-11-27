function solution(arr) {
  let loopCount = 0; // 반복 횟수
  let current = [...arr]; // 현재 배열
  let next = []; // 다음 배열 상태

  while(true) {
    next = current.map(num => {
      if(num >= 50 && num % 2 === 0) {
        return num / 2
      } else if(num < 50 && num % 2 === 1) {
        return num * 2 + 1
      } else {
        return num
      }
    })

    if(current.every((value, idx) => value === next[idx])) {
      break;
    }

    current = next;
    loopCount++;
  }

  return loopCount;
}