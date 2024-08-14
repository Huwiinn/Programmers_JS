function solution(a, b) {
  const FirstAddNum = Number(a.toString() + b.toString());
  const SecondAddNum = Number(b.toString() + a.toString());

  return FirstAddNum > SecondAddNum ? FirstAddNum : SecondAddNum;
}