const object1 = {
    name: 'park',
    age: 24,
};

const object2 = object1;

object1.age = 40;

console.log(object2.age);