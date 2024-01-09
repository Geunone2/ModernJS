const values = [1, [2, 3], 4, [5, 6]];

const flatten = values.reduce((acc, cur) => acc.concat(cur), []);

console.log(flatten);

//Array.prototype.flat 메서드 사용이 더 직관적
// [1, [2, 3, 4, 5]].flat(); // [1, 2, 3, 4, 5]
// [1, [2, 3, [4, 5]]].flat(2); // [1, 2, 3, 4, 5]