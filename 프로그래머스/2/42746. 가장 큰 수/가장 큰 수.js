function solution(numbers) {
    var result = numbers.map(a => a.toString()).sort((a,b) => (b+a)-(a+b)).join('');
    return result[0] === '0' ? '0' : result ;
}