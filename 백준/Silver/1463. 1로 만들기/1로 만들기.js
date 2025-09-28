const fs = require('fs');
const N = Number(fs.readFileSync(0, 'utf8').trim());

const dp = new Array(N + 1).fill(0);
dp[1] = 0;

for (let x = 2; x <= N; x++) {
  dp[x] = dp[x - 1] + 1;
  if (x % 2 === 0) dp[x] = Math.min(dp[x], dp[Math.floor(x / 2)] + 1);
  if (x % 3 === 0) dp[x] = Math.min(dp[x], dp[Math.floor(x / 3)] + 1);
}

console.log(dp[N]);