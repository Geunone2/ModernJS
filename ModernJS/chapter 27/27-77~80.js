const arr = [1, 2, 3];

arr.fill(0);
console.log(arr);

const arr1 = [1, 2, 3];
arr1.fill(0, 1);
console.log(arr1);

const arr2 = [1, 2, 3];
arr2.fill(0, 1, 3);
console.log(arr2);

const arr3 = new Array(3);
console.log(arr3);

const result = arr3.fill(1);
console.log(arr3);
console.log(result);