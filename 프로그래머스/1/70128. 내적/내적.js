function solution(a, b) {
    return a.map((item,index) => item * b[index]).reduce((total,item) => total + item,0);
}