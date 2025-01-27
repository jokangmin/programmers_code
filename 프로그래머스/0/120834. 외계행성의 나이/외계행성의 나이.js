function solution(age) {
    var answer = '';
    return answer = age.toString().split('').map(a => String.fromCharCode(Number(a)+97)).join('');
}