var value = 1;

const obj = {
    value: 100,
    foo() {
        // 화살표 함수 내부의 this는 상위 스코프 this를 가리킴
        setTimeout(() => console.log(this.value), 100);
    }
};

obj.foo();