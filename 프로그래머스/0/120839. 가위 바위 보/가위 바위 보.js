function solution(rsp) {
    var answer = '';
    return answer = rsp.split('').map(a => a==="2" ? a = 0 : a==="0" ? a = 5 : 2 ).join('');
}