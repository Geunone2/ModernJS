class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName} `;
    }

,

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }

,
};

console.log(`${person.firstName} ${person.lastName}`);

person.fullName = 'Geunwon Park';
console.log(person);

console.log(person.fullName);

console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));