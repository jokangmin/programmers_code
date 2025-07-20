function solution(n, t, m, p) {
    let result = '';
    let answer = '';
    let number = 0;

    while(result.length < t * m) {
        result += number.toString(n).toUpperCase();
        number++;
    }

    for(let i=0;i<t;i++) {
        answer += result[(i * m) + (p - 1)];
    }

    return answer;
}
