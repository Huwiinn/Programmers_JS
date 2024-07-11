
// let numArr = [2,3,4,10,22,30,50,31,1,111,103]

// function solution(n, numlist) {
//     let arr = [];
//     for(item of numlist) {
//         if(item % n === 0) {
//             // console.log(item);
//             arr.push(item);
//             console.log(item);
//         }
//     }
//     let result = arr
//     return result;
// }

// solution(2,numArr)

// - 정수 n, 정수 배열 numlist
// 1. n의 배수를 return하는 함수를 작성


// 정답 코드
function solution(n, numlist) {
    let arr = [];
    for(item of numlist) {
        if(item % n === 0) {
            // console.log(item);
            arr.push(item);
            console.log(item);
        }
    }
    let result = arr
    return result;
}