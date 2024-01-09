function makeCounter(predicate) {
    let counter = 0;

    return function() {
        counter = predicate(counter);
        return counter;
    };
}

// 보조 함수
function increase(n) {
    return ++n;
}

// 보조 함수
function decrease(n) {
    return --n;
}

// 함수로 함수를 생성
// makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환
const increaser = makeCounter(increase);
console.log(increaser());
console.log(increaser());

// increaser 함수와는 별개로 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동x
const decreaser = makeCounter(decrease);
console.log(decreaser());
console.log(decreaser());