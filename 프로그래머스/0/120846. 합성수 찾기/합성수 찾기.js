function solution(n) {
    var answer = [];
    for(let i=1;i<=n;i++){
        for (let j = 2; j < i; j++) {
            if(i % j === 0){
                answer.push(i);
            }
        }
    }
    return [...new Set(answer)].length;
}