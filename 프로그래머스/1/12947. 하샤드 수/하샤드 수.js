function solution(x) {
    return x % (x.toString().split('').reduce((total,a) => total + Number(a),0)) === 0;
}