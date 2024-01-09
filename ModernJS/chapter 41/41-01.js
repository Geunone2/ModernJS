// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출됨
setTimeout(() => console.log('hi'), 1000);

// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출됨
// 이때 콜백 함수에 'Lee'가 인수로 전달됨
setTimeout(name => console.log(`Hi! ${name}.`), 1000, 'Lee');

// 두 번째 인수를 생략하면 기본값은 0이 지정됨
setTimeout(() => console.log('Hello!'));