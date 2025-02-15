function solution(d, budget) {
    var answer = 0;
    var sort_d = [...d].sort((a,b) => a-b);
    var num = 0;
    for(let i = 0;i<sort_d.length;i++){
        num += sort_d[i];
        if(num <= budget){
            answer++;
        }else{
            break;
        }
    }
    return answer;
}