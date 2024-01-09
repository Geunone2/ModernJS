function solution(a, b) {
    const day = new Date(2016, a - 1, b);
    console.log(day);
    const dayNames = [
        'SUN',
        'MON',
        'TUE',
        'WED',
        'THU',
        'FRI',
        'SAT',
    ];
    var answer = day.getDay();
    if (answer === 0) {
        return dayNames[0];
    } else if (answer === 1) {
        return dayNames[1];
    } else if (answer === 2) {
        return dayNames[2];
    } else if (answer === 3) {
        return dayNames[3];
    } else if (answer === 4) {
        return dayNames[4];
    } else if (answer === 5) {
        return dayNames[5];
    } else return dayNames[6];

    console.log(answer);
    return answer;
}

solution(1, 5);

function solution(a, b) {
    const day = new Date(2016, a-1, b);
    console.log(day);
    const dayNames = [
        'SUN',
        'MON',
        'TUE',
        'WED',
        'THU',
        'FRI',
        'SAT',
    ];
    const answer = dayNames[day.getDay()];
    return answer;
}
solution(2, 27)

function solution(a, b) {
    console.log((new Date(2016 + `/${a}` + `/${b}`)).toLocaleString('en-US'));
    console.log((new Date(2016 + `/${a}` + `/${b}`)).toLocaleString('ko-KR'));
    console.log((new Date(2016 + `/${a}` + `/${b}`)));
}

solution(5,24)