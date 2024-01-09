function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    console.log(`Hi ${this.name}`);
};

const person = new Person('Park');
person.sayHi();