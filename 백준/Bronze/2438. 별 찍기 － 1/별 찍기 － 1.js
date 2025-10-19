const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const count = Number(input);

for (let i = 0; i < count; i++) {
    console.log("*".repeat(i + 1));
}