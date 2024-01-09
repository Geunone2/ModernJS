let count = 1;

// 1초 후 타이머가 만료될 때마다 콜백 함숙 ㅏ호출됨
// setInterval 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반화
const timeoutId = setInterval(() => {
    console.log(count);

    // count가 5이면 setInterval 함수가 반환한 타이머 id를 clearInterval 함수 인수로 전달하여
    // 타이머를 취소, 타이머가 취소되면 setInterval 함수의 콜백 함수가 실행되지 않음
    if (count++ === 5) clearInterval(timeoutId);
}, 1000);