// 직사각형 형태의 그림 파일이 있고, 이 그림 파일은 1 × 1 크기의 정사각형 크기의 픽셀로 이루어져 있습니다.
// 이 그림 파일을 나타낸 문자열 배열 picture과 정수 k가 매개변수로 주어질 때,
// 이 그림 파일을 가로 세로로 k배 늘린 그림 파일을 나타내도록 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// 가로와 세로를 k배 늘려야 함
// 코드상에서 가로는 무엇으로 정의해야하며, 세로는 무엇으로 정의해야하는가?
// k만큼 더 생겨야함 => 요소 복제
// 요소를 n만큼 복제하기 위해서는 repeat 메서드 사용하면 편하다.
function solution(picture, k) {
  let expendPictureElementArr = [];

  for (const line of picture) {
    // 가로 확장
    const newLine = [...line].map((char) => char.repeat(k)).join();
    // expendPictureElementArr.push(newLine);

    // 세로 확장
    for (let i = 0; i < k; i++) {
      expendPictureElementArr.push(newLine);
    }
  }

  const result = expendPictureElementArr.map((item) =>
    item.replaceAll(",", "")
  );

  console.log(result);
  return result;
}

solution(
  [
    ".xx...xx.",
    "x..x.x..x",
    "x...x...x",
    ".x.....x.",
    "..x...x..",
    "...x.x...",
    "....x....",
  ],
  2
); // ["..xxxx......xxxx..", "..xxxx......xxxx..", "xx....xx..xx....xx", "xx....xx..xx....xx", "xx......xx......xx", "xx......xx......xx", "..xx..........xx..", "..xx..........xx..", "....xx......xx....", "....xx......xx....", "......xx..xx......", "......xx..xx......", "........xx........", "........xx........"]
