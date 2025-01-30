function solution(i, j, k) {
    var answer = 0;
    for(let a = i;a<=j;a++){
        if(a >= 10){
            answer = answer + a.toString().split('').filter(a => Number(a) == k).length;
        }else{
            if(a === k){
                answer += 1;
            }
        }
    }
    return answer;
}