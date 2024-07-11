function solution(myString) {
  let result = myString
    .split("")
    .map((char) => (char < "l" ? "l" : char))
    .join("");

  console.log({ result });
  return result;
}

// solution("abcdevwxyz");
solution("jjnnllkkmm");
