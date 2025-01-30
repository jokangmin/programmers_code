function solution(n) {
    var answer = 1;
    var num = 0;
    
    for (let i = 1; answer <= n; i++) {
        num = i;
        answer *= i;
    }
    
    return num - 1;
}
