function solution(arr) {
  const rows = arr.length;
  const cols = arr[0].length;

  if (rows > cols) {
    return arr.map(row => {
      const zerosToAdd = rows - row.length;
      return row.concat(new Array(zerosToAdd).fill(0));
    });
  } else if (cols > rows) {
    const newArr = [...arr];
    const rowsToAdd = cols - rows;
    
    const zerosRow = new Array(cols).fill(0);
    for (let i = 0; i < rowsToAdd; i++) {
      newArr.push([...zerosRow]);
    }
    return newArr;
  } else {
    return arr;
  }
}