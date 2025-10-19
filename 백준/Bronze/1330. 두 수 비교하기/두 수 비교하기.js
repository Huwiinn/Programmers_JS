const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString()
  .trim()
  .split(" ")
  .map((num) => Number(num));
  
const A = input[0];
const B = input[1];

if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else {
  console.log("==");
}
