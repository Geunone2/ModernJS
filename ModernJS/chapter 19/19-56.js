function Person(name) {
    this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function() {
    console.log(`Hi! My name is ${this.name}`);
}

Person.staticProp = "static prop";

Person.staticMethod = function (){
    console.log('staticMethod');
};

const me = new Person('Lee');

Person.staticMethod();
me.staticMethod();