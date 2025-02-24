function solution(k, score) {
    var answer = [];
    var result = [];
    for(let i=0;i<score.length;i++){
        if(i < k){
            answer.push(score[i]);
        }else if([...answer].sort((a,b) => a-b)[0] < score[i]){
            answer.shift();
            answer.push(score[i]);
        }
        result.push(answer.sort((a,b) => a-b)[0]);
    }
    return result;
}