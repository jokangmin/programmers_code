function solution(n) {
    var answer = [];
    for(let i=0;i<n;i++){
        answer[i] = [];
        for(let j=0;j<n;j++){
            if(i === j) answer[i][j] = 1;
            else answer[i][j] = 0;
        }
    }
    return answer;
}