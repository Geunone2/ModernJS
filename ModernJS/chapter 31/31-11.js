const target = 'Is this all there is?';

const regExp = /is/i;

console.log(regExp.test(target));
console.log(target.match(regExp));