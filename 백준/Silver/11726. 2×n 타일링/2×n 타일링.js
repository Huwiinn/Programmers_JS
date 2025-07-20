const fs = require("fs");

// 백준
const readFileSyncAddress ="/dev/stdin";

let N = fs.readFileSync(readFileSyncAddress).toString().trim();

const dp = {
  1: 1,
  2: 2,
};

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[N]);