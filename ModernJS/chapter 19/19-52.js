const obj = Object.create(null);
obj.a = 1;

console.log(Object.getPrototypeOf(obj) === null);

// obj는 Object.prototype 빌트인 메서드를 사용x
console.log(obj.hasOwnProperty('a'));