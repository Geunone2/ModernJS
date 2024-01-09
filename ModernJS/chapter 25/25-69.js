class Base {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `Hi! ${this.name}`;
    }
}

class Derived extends Base {
    sayHi() {
        const __super = Object.getPrototypeOf(Derived.prototype);
        return `${super.sayHi()}. how are you doing?`;
    }
}

const derived = new Derived('Park');
console.log(derived.sayHi());