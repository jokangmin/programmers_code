function solution(strings, n) {
    var answer = [];
    var result = [];
    for(let i=0;i<strings.length;i++){
        answer.push({index: i, str: strings[i][n]});
    }
    
    answer.sort((a,b) => a.str > b.str ? 1 : -1);
    answer.sort((a,b) => a.str === b.str ? strings[a.index] > strings[b.index] ? 1 : -1 : 0);

    for(let i=0;i<answer.length;i++){
        result.push(strings[answer[i].index]);
    }
    
    return result;
}