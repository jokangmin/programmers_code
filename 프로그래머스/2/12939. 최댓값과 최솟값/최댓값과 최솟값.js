function solution(s) {
    var arr = s.split(' ').map(a => Number(a));
    return Math.min(...arr) + " " + Math.max(...arr);
}