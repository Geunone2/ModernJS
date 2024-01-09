function Person(name){
    this.name = name;
}

const me = new Person('Lee');
function isInstanceof(instance, constructor){
    // 프로토타입 취득
    const prototype = Object.getPrototypeOf(instance);

    // 재귀 탈출 조건
    if(prototype === null) return false;

    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}

console.log(isInstanceof(me, Person));
console.log(isInstanceof(me, Object));
console.log(isInstanceof(me, Array));