function solution(n) {
    var a = 0, b = 1, num;
    for(let i=2;i<=n;i++){
        num = (a + b) % 1234567;
        a = b;
        b = num;
    }
    return b;
}