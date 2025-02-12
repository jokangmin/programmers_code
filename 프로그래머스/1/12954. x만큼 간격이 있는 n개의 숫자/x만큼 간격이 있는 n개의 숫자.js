function solution(x, n) {
    var answer = [];
    var num = 0;
    for(let i =x;num<n;i+=x){
        answer.push(i);
        num++;
    }
    return answer;
}