// 문자열 my_string과 정수 배열 indices가 주어질 때,
// my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, indices) {
  const sortIndices = indices.sort((a, b) => a - b);

  const result = [...my_string]
    .filter((v, i) => (sortIndices.includes(i) ? "" : v))
    .join("");

  return result;
}

solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]); // programmers

// 다른 풀이
// function solution(m, a) {
//     let answer = '';

//     for(let i = 0; i<m.length; i++){
//         if(!a.includes(i)){
//             answer += m[i]
//         }
//     }

//     return answer;
// }
