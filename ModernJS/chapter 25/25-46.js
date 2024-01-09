class Person {
    name = 'Park';

    getName = function () {
        return this.name;
    };
}

const me = new Person();
console.log(me);
console.log(me.getName());