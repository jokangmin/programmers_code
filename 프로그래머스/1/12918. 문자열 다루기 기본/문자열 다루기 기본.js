function solution(s) {
    var num = s.split('').filter(a => !isNaN(a)).join('').length;
    var num2 = s.split('').filter(a => isNaN(a)).join('').length;
    return num2 === 0 ? num === 4 || num === 6 ? true : false :false ;
}