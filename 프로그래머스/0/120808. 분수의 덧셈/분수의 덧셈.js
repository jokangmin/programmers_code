function solution(numer1, denom1, numer2, denom2) {
    var numer = (denom1 * numer2) + (denom2 * numer1);
    var denom = denom1 * denom2;
    const getNum = (a,b) => (a % b === 0 ? b : getNum(b,a%b));
    var n = getNum(numer,denom);
    
    return [numer / n,denom / n];
}