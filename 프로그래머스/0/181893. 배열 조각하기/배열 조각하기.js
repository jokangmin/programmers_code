function solution(arr, query) {
    var answer = arr.concat();
    
    for(let i = 0;i<query.length;i++){
        if(i % 2 == 0 || i == 0){
            answer = answer.slice(0,query[i]+1);
        }
        if(i % 2 != 0){
            answer = answer.slice(query[i]);
        }
    }
        
    return answer;
}