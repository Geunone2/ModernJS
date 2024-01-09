function solution(s1, s2) {
        return s1.filter(v => s2.includes(v)).length;

}

console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']));