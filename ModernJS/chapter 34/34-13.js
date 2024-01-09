const arr = [...fibonacci];
console.log(arr);

const [first, second, ...rest] = fibonacci;
console.log(first, second, rest);