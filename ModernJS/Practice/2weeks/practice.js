kim('migni');
lee('dongyup');


// 함수 선언문, 함수 호이스팅 -> 호이스팅이 된다 ~
function kim(name) {
    console.log(`Hello, ${name}`);
}

// 함수 표현식, 변수 호이스팅 -> 이 시퀴는 안된다 ~
const lee = function(name) {
    console.log(`Hello, ${name}`);
}