function solution(myString, pat) {
  const findIdx = myString.lastIndexOf(pat);

  if (findIdx === -1) {
    return "";
  }

  return myString.slice(0, findIdx + pat.length);
}