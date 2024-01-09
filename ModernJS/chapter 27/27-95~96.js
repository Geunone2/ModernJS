const numbers = [1, 2, 3];
const pows = [];

for (let i = 0; i < numbers.length; i++) {
    pows.push(numbers[i] ** 2);
}
console.log(pows);

const numbers1 = [1, 2, 3];
const pows1 = [];

numbers1.forEach(item => pows1.push(item ** 2));
console.log(pows1);