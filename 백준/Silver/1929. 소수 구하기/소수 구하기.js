const fs = require('fs');
const [M, N] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const isPrime = new Uint8Array(N + 1).fill(1);
if (N >= 0) isPrime[0] = 0;
if (N >= 1) isPrime[1] = 0;

// 에라토스테네스의 체
for (let p = 2; p * p <= N; p++) {
  if (isPrime[p]) {
    for (let k = p * p; k <= N; k += p) isPrime[k] = 0;
  }
}

// 한 줄에 하나씩 출력 (버퍼에 모아 한 번에)
const out = [];
for (let i = Math.max(M, 2); i <= N; i++) {
  if (isPrime[i]) out.push(String(i));
}
console.log(out.join('\n'));