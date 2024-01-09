function solution(arr, divisor) {
    var answer = [];

    arr.map((v) => {
        v % divisor === 0 && answer.push(v);
    });

    return answer.length ? answer.sort((a, b) => a - b) : [-1];


}

console.log(solution([5, 9, 7, 10], 5));