let count = 0;

function solution(order) {
    // 매개변수를 str로 변환
    let strValue = String(order);
    console.log(typeof strValue);

    // 변환한 srt을 배열로 하나씩 값을 나눠줌
    let value = strValue.split("");
    console.log(value);

    // 배열의 value값을 반환해주는 반복문 for ... of
    for(item of value) {
        // 앞에서 value 변수명에 배열로 쪼개준 item 요소들이 잘 들어오는지
        console.log(item);
        // if문, item에 '3', '6', '9'가 있는지 확인
        if(item.includes('3') || item.includes('6') || item.includes('9')) {
            console.log(item);
            // item.indexOf()
            console.log('Clap! :)');
        } else {
            console.log('Nope :(');
        }
    }
}

solution(343); 