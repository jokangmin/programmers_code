function solution(num) {
    var answer = 0;
    while(answer < 500){
        if(num === 1){
            return 0;
        }else if(num % 2 === 0){
            num /= 2;
            answer++;
            if(num === 1){
                return answer;
            }
        }else{
            num = (num*3)+1;
            answer++;
            if(num === 1){
                return answer;
            }
        }
    }
    return -1;
}