function solution(a, b) {
   
    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    let g = gcd(a, b);
    a /= g;
    b /= g;


    var factors = [];
    var divisor = 2;
    while (b >= 2) {
        while (b % divisor === 0) {
            factors.push(divisor);
            b /= divisor;
        }
        divisor++;
    }

    return factors.filter(a => !(a === 2 || a === 5)).length >= 1 ? 2 : 1 ;
}
