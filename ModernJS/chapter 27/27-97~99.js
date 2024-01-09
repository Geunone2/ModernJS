[1, 2, 3].forEach((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${arr}`);
});

const numbers = [1, 2, 3];
numbers.forEach((item, index, arr) => {
    arr[index] = item ** 2;
});

console.log(numbers);

const result = [1, 2, 3].forEach(console.log);
console.log(result);