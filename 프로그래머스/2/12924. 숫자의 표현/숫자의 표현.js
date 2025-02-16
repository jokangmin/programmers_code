function solution(n) {
    var answer = 1;
    var num = 0;
    for(let i=1;i<n/2;i++){
        for(let j=i;num<n;j++){
            num += j;
            if(num === n){
                num = 0;
                answer++;
                break;
            }
        }
        num = 0;
    }
    return answer;
}