const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const count = Number(input);

for (let i = 0; i < count; i++) {
  const blank = " ";
  const blankCount = count - i - 1;

  console.log(blank.repeat(blankCount) + `*`.repeat(i + 1));
}