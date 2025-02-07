function solution(lines) {
    var answer = 0;
    var lineMap = {};
    
    for(let i = 0;i<lines.length;i++){
        for(let j =lines[i][0];j<lines[i][1];j++){
            lineMap[j] = (lineMap[j] || 0) + 1;
        }
    }
    
    for (let key in lineMap) {
        if (lineMap[key] > 1) {
            answer++;
        }
    }
    
    return answer;
}