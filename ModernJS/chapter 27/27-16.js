const arr = [1];

arr.length = 3;

console.log(Object.getOwnPropertyDescriptors(arr));