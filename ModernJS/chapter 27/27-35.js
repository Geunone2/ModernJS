const arr = [0];

arr[100] = 100;

console.log(Object.getOwnPropertyDescriptors(arr));