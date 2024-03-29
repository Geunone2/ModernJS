const Person = (function () {
    let _age = 0;

    function Person(name, age) {
        this.name = name;
        _age = age;
    }

    Person.prototype.sayHi = function () {
        console.log(`Hi! My name is ${this.name}, I am ${_age}`);
    };

    return Person;
}());

const me = new Person('Park', 24);
me.sayHi();
console.log(me.name);
console.log(me._age);

const you = new Person('Geun', 34);
you.sayHi();
console.log(you.name);
console.log(you._age);