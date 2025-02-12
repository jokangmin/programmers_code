function solution(a, b) {
    var answer = 0;
    if(b>=a){
        for(let i = a;i<=b;i++){
            answer += i;
        }
    }else{
        for(let i = a;i>=b;i--){
            answer += i;
        }
    }
    
    return answer;
}