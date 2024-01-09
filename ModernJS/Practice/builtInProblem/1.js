function solution(phone_number) {
    let split_num = phone_number.split('', phone_number.indexOf(phone_number.slice(-4)));
    for (let i = 0; i < split_num.length; i++) {
        split_num[i] = '*';
        console.log(split_num);
    }
    console.log(split_num.join('') + phone_number.slice(-4));
    return split_num.join('') + phone_number.slice(-4);
}
solution("1");