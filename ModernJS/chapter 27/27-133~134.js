const arr = ['hello', 'world'];

console.log(arr.map(x => x.split('')).flat());

console.log(arr.flatMap(x => x.split('')));

const arr1 = ['hello', 'world'];

console.log(arr1.flatMap((str, index) => [index, [str, str.length]]));
console.log(arr1.map((str, index) => [index, [str, str.length]]).flat(2));