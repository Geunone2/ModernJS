const str = 'Hello world';

console.log(str.substring(0, str.indexOf(' ')));
console.log(str.substring(str.indexOf(' ') + 1, str.length));