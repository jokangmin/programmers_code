function solution(n) {
    var answer = [];
    while(n > 1){
        for(let i = 2;i<=n;i++){
            if(n%i === 0){
                n = Math.floor(n/i);
                answer.push(i);
                break;
            }
        }
    }
    return [...new Set(answer)].sort((a,b) => a-b);
}