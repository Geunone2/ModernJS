const person = (name => ({
    sayHi() {
        return `Hi? My name is ${name}.`;
    },
}))('Park');

console.log(person.sayHi());