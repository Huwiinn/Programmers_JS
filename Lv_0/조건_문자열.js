// 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

// 두 수가 n과 m이라면
// ">", "=" : n >= m
// "<", "=" : n <= m
// ">", "!" : n > m
// "<", "!" : n < m
// 두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

function solution(ineq, eq, n, m) {
  if (ineq === "<" && eq === "=") {
    const result = n <= m;
    return result ? 1 : 0;
  } else if (ineq === ">" && eq === "=") {
    const result = n >= m;
    return result ? 1 : 0;
  } else if (ineq === "<" && eq === "!") {
    const result = n < m;
    return result ? 1 : 0;
  } else if (ineq === ">" && eq === "!") {
    const result = n > m;
    return result ? 1 : 0;
  }
}

solution("<", "=", 20, 50); // 1
solution(">", "!", 41, 78); // 0

// 다른 코드들

// 1. 객체를 활용한 방법
// const operations = {
//   ">=": (n, m) => n >= m,
//   "<=": (n, m) => n <= m,
//   ">!": (n, m) => n > m,
//   "<!": (n, m) => n < m,
// };

// function solution(ineq, eq, n, m) {
//   const op = operations[ineq + eq];
//   return Number(op(n, m));
// }

// ---------------------------------------

// 2. 논리적으로 간결하게 만들어진 코드
// function solution(ineq, eq, n, m) {
//   if (eq === "=" && n === m) return 1;
//   if (ineq === "<" && n < m) return 1;
//   if (ineq === ">" && n > m) return 1;
//   return 0;
// }
