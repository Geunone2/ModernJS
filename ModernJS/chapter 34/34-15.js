import {fibonacciFunc} from './34-14.js';

const iterable = fibonacciFunc(5);

const iterator = iterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());