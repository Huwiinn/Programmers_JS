function solution(myString) {
  const result = myString.includes("a")
     ? myString.toLowerCase().replaceAll("a", "A")
    : myString.toLowerCase().replaceAll("a", "A");

  return result;
}