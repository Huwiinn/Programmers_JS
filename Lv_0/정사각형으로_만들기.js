// 이차원 정수 배열 arr이 매개변수로 주어집니다.
// arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고,
// 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

// function solution(arr) {
//   const columnLength = arr.length; // 행
//   const newRowArr = [];

//   const getDummyArr = (length, fillNum) => {
//     return new Array(length).fill(fillNum);
//   };

//   for (const row of arr) {
//     // console.log("row.length :", row.length);
//     // console.log("col.length :", columnLength);
//     if (row.length < columnLength) {
//       let rowArr = [...row];
//       for (let i = row.length; i < columnLength; i++) {
//         const zero = [0];
//         // let rowArr = [...row, ...zero];
//         rowArr.push(...zero);
//         console.log("rowArr : ", rowArr);
//         newRowArr.push(rowArr);
//       }
//       console.log("newRowArr : ", newRowArr);
//     } else if (row.length > columnLength) {
//       newRowArr.push(...arr);
//       const repeatCount = row.length - columnLength;

//       for (let i = 0; i < repeatCount; i++) {
//         const dummyArr = getDummyArr(row.length, 0);
//         newRowArr.push(dummyArr);
//       }

//       console.log("222 newRowArr : ", newRowArr);
//       return newRowArr;
//     } else if (row.length === columnLength) {
//       console.log("333 arr : ", arr);
//       return arr;
//     }
//   }

//   console.log("111 newRowArr : ", newRowArr);
//   //   return newRowArr;
// }

function solution(arr) {
  // 행의 수와 열의 수를 명확하게 구분합니다.
  const rows = arr.length;
  const cols = arr[0].length; // 모든 행의 길이가 동일하다고 가정

  if (rows > cols) {
    // 행의 수가 더 많으므로, 각 행에 부족한 열의 개수만큼 0을 추가합니다.
    return arr.map((row) => {
      const zerosToAdd = rows - row.length; // 부족한 열의 개수 = rows - cols
      return row.concat(new Array(zerosToAdd).fill(0));
    });
  } else if (cols > rows) {
    // 열의 수가 더 많으므로, 전체 행의 수가 열의 수와 같아지도록
    // 새로운 행(모두 0으로 채워진 배열)을 추가합니다.
    const newArr = [...arr];
    const rowsToAdd = cols - rows;
    // 각 추가할 행은 cols 길이의 0 배열입니다.
    const zerosRow = new Array(cols).fill(0);
    for (let i = 0; i < rowsToAdd; i++) {
      newArr.push([...zerosRow]);
    }
    return newArr;
  } else {
    // 이미 정사각형인 경우 그대로 반환합니다.
    return arr;
  }
}

// solution([
//   [572, 22, 37],
//   [287, 726, 384],
//   [85, 137, 292],
//   [487, 13, 876],
// ]); // [[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]

// solution([
//   [57, 192, 534, 2],
//   [9, 345, 192, 999],
// ]); // [[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]

solution([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
]); // [[1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0]]
