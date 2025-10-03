const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let p = 0;
const N = input[p++], M = input[p++];
const nums = new Array(N);
for (let i = 0; i < N; i++) nums[i] = input[p++];

// prefix[0] = 0, prefix[i] = nums[0..i-1]의 합
const prefix = new Array(N + 1);
prefix[0] = 0;
for (let i = 1; i <= N; i++) {
  prefix[i] = prefix[i - 1] + nums[i - 1];
}

const out = new Array(M);
for (let q = 0; q < M; q++) {
  const i = input[p++], j = input[p++];
  out[q] = String(prefix[j] - prefix[i - 1]);
}

console.log(out.join('\n'));
