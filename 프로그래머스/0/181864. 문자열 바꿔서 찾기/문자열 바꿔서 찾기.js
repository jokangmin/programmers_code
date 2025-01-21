function solution(myString, pat) {
    var arr = [...myString];
    return answer = arr.map(item => item == 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}