const person = {
    name: 'Park',
    sayHi: () => console.log(`Hi ${this.name}`),
};

person.sayHi();