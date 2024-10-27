function solution(myStr) {
  const result = myStr.split(/[abc]/).filter((value) => value !== "");
  return result.length > 0 ? result : ["EMPTY"];
}