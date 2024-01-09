function Person(name, age) {
    this.name = name; // public
    let _age = age; // private
}

// 프로토타입 메서드
Person.prototype.sayHi = function () {
    console.log(`Hi! My name is ${this.name}, I am ${_age}.`);
};

const me = new Person('park', 24);
me.sayHi();