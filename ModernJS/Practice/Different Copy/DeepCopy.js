const obj1 = {name : 'Origin Data'}

const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.name = 'Modified Data';

console.log(obj1); // { name: 'Origin Data' }
console.log(obj2); // { name: 'Modified Data' }
