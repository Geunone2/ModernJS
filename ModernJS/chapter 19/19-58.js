function Foo() {}

// 프로토타입 메서드
// this를 참조하지 안흔 프로토타입 메서드는 정적 메서드로 변경하여도 동일한 효과o
Foo.prototype.x = function () {
    console.log('x');
}

const foo = new Foo();

foo.x();

Foo.x = function() {
    console.log('x');
}

// 정적 메서드는 인스턴스를 생성하지 않아도 호출 o
Foo.x();