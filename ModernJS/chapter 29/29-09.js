console.log(Math.min(1));
console.log(Math.min(1, 2));
console.log(Math.min(1, 2, 3));
console.log(Math.min());

console.log(Math.min.apply(null, [1, 2, 3]));
console.log(Math.min(...[1, 2, 3]));