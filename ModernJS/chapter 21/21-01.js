// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(strObj);
console.log(typeof strObj);

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(numObj);
console.log(typeof numObj);

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj= new Boolean(true);
console.log(boolObj);
console.log(typeof boolObj);

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x');
console.log(func);
console.log(typeof func);

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log(arr);
console.log(typeof arr);

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(regExp);
console.log(typeof regExp);

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(date);
console.log(typeof date);