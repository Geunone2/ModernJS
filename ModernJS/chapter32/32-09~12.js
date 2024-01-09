const str = 'Hello World';

console.log(str.indexOf('l'));
console.log(str.indexOf('or'));
console.log(str.indexOf('x'));

console.log(str.indexOf('l', 3));

if(str.indexOf('Hello') !== -1){
    // 문자열 str에 'Hello'가 포함되어 있는 경우에 처리할 내용
}

if(str.includes('Hello')){
    // 문자열 str에 'Hello'가 포함되어 있는 경우에 처리할 내용
}