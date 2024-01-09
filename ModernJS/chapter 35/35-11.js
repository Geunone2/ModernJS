// ES5
var arr1 = [1, 4];
var arr2 = [2, 3];

// 세 번째 인수 arr2를 해체하여 전달해야 함
// 그렇지 앟으면 arr1에 arr2 배열 자체가 추가됨
arr1.splice(1, 0, arr2);

console.log(arr1);