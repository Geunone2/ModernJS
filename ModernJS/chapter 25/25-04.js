class Person {
    constructor(name) {
        this.name = name;
    }

    static sayHello() {
        console.log('hello!');
    }

    sayHi() {
        console.log(`Hi! My name is ${this.name}`);
    }
}

const me = new Person('park');
console.log(me.name);
me.sayHi();
Person.sayHello();