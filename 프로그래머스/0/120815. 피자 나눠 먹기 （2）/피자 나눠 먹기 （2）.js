function solution(n) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    const lcm = (n * 6) / gcd(n, 6);
    return lcm / 6;
}
