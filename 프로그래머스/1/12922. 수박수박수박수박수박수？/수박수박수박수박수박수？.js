function solution(n) {
    var toggle = true;
    var answer = '';
    for(let i=0;i<n;i++){
        if(toggle){
            answer += "수";
            toggle = false;
        }else{
            answer += "박";
            toggle = true;
        }
    }
    return answer;
}