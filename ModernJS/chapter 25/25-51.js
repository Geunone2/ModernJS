class Person {
    #name = '';

    constructor(name) {
        this.name = name;
    }

    get name() {
        return this.#name.trim();
    }
}

const me = new Person(' Park ');
console.log(me.name);