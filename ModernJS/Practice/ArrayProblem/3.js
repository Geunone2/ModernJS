// 1. n행 n열 크기의 비어있는 2차원 배열 생성
// 2. for문으로 i, j로 돌려서 채우기
// 3. 행을 잘라내어 이어붙여서 1차원 배열로 생성
// 4. 새로운 1차원 배열에서 arr[left], arr[left+1], arr[right]만 남기고 나머지 지움

function solution(n, left, right) {
    const answer = [];

    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const column = i % n;
        answer.push(Math.max(row, column) + 1);
    }
    return answer;
}

console.log(solution(3, 2, 5));