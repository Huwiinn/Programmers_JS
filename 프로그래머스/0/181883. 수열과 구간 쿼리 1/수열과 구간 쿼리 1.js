function solution(arr, queries) {
  for (let query of queries) {
    const [s, e] = query;
    console.log(s, e);

    for (let i = s; i <= e; i++) {
      arr[i] += 1;
    }
    // query.map((v, i) => (arr[v] += 1));
  }

  return arr;
}