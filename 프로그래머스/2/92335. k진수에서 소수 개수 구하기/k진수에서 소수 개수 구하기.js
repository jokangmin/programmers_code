function solution(n, k) {
    var answer = 0;
    const jinsu = n.toString(k).split(0).filter((a) => a != 1 && a != "");
    
    function isPrime(num) {
        num = Number(num);

        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;

        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    for (const candidate of jinsu) {
        if (isPrime(candidate)) {
            answer++;
        }
    }
    
    return answer;
}