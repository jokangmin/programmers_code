function solution(s) {
    return s.split(' ').map( a => a ? a[0].toUpperCase() + a.slice(1).toLowerCase() : '').join(' ');
}