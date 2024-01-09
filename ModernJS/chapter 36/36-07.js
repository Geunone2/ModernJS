const [a, b, c = 3] = [1, 2];
console.log(a, b, c);

// 기본값보다 할당된 값을 우선
const [e,f = 10, g= 3] = [1, 2];
console.log(e, f, g);