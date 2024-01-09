let obj1 = {name : 'Origin Data'}

let obj2 = obj1;

obj2.name = 'Modified Data';

console.log(obj1); // { name: 'Modified Data' }
console.log(obj2); // { name: 'Modified Data' }