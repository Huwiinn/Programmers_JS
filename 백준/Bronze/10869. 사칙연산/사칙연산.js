const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString()
  .trim()
  .split(" ")
  .map((num) => Number(num));


const A = input[0];
const B = input[1];

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A / B));
console.log(A % B);