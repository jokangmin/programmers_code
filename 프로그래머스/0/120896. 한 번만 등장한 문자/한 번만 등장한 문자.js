function solution(s) {
    var answer = '';
    return answer = s.split('').filter(item => s.indexOf(item) === s.lastIndexOf(item)).sort().join('');
}