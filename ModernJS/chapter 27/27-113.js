const sum = [1, 2, 3, 4].reduce((accumulator, currentValue, index, Array) =>
    accumulator + currentValue, 0);

console.log(sum);