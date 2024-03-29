const counter = (function () {
    // 카운트 상태 변수
    let num = 0;

    // 클로저인 메서드를 갖는 객체를 반환
    // 객체 리터럴은 스코프를 만들지 않음
    // 따라서 아래 메서드들의 상위 스코프는 즉시 실행함수의 렉시컬 환경
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return num > 0 ? --num : 0;
        },
    };
}());

console.log(counter.increase());
console.log(counter.increase());

console.log(counter.decrease());
console.log(counter.decrease());