// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

// 프로토타입으로 교체할 객체
const parent = {};

// 프로토타입 교체
Object.setPrototypeOf(me, parent);

// Person 생성자 함수와 parent 객체는 연결x
console.log(Person.prototype === parent);
console.log(parent.constructor === Person);
console.log(me instanceof Person);
console.log(me instanceof Object);