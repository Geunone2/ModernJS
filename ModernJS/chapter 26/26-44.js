class Person {
    name = 'Park';
    sayHi = () => console.log(`Hi ${this.name}`);
};

const person = new Person();
person.sayHi();