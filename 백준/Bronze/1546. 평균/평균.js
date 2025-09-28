const fs = require("fs");
const scoresArr = fs
  .readFileSync(0, "utf8")
  .trim()
  .split(/\r?\n/);

const [N, ...scores] = scoresArr;

function solution(N, scores) {
  const convertedScoresArr = scores[0].split(" ");

  const maxScore = Math.max(...convertedScoresArr);
  const newScores = convertedScoresArr.map((score) => (score / maxScore) * 100);
  const result = newScores.reduce((acc, score) => acc + score, 0) / N;
  console.log(result);
}

solution(N, scores);