function solution(a, b, n) {
    var result = 0;
    var bottle = 0;
    while(n>=a){
        bottle = Math.floor(n%a);
        let num = Math.floor(n/a)*b;
        result += num;
        n = bottle + num;
    }
    return result;
}