function solution(s1, s2) {
  let result = s1.filter((e) => s2.includes(e)).length;

  return console.log(result);
}

solution(["c", "a"], ["a", "c", "b"]);
