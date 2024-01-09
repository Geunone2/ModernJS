const obj = {
    [Symbol('mySymbol')]: 1,
};

console.log(Object.getOwnPropertySymbols(obj));

const symbolKey1 = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[symbolKey1]);