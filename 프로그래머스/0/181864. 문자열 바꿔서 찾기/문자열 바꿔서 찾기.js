function solution(myString, pat) {
  const convertString = [...myString]
    .map((char) =>
      char === "A" ? char.replace("A", "B") : char.replace("B", "A")
    )
    .join("");

  return convertString.includes(pat) ? 1 : 0;
}