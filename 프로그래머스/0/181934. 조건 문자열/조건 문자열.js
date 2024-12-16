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