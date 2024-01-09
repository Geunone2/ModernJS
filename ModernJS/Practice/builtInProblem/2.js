function solution(X, Y) {

    let answer = "";

    let tmp = [];
    X = X.split("");
    Y = Y.split("");


    for (let i = 0; i < X.length; i++) {
        if (Y.includes(X[i])) {
            tmp.push(X[i]);
            Y.splice(Y.indexOf(X[i]), 1);
        }
    }
    console.log(tmp);


    const answer1 = tmp.sort()

    const answer2 = answer1.reverse().join("")
    console.log(answer2);

    if (tmp.length == "0") {
        return "-1";
    }

    if (answer1[0] == "0"){
        return "0";
    };

    // console.log(answer1);
    return answer1;
}

solution("12321", "42531");