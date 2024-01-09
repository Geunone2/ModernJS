class Base {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

class Derived extends Base {
    // 암묵적으로 constructor 정의
    // constructor(...args) {super(...args);}
}

const derived = new Derived(1, 2);
console.log(derived);