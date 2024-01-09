console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

function isEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));