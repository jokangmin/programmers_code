function solution(want, number, discount) {
    var answer = 0;
    var start = 0;
    
    while(start <= discount.length-10){
        let toggle = true;
        
        for(let i=0;i<want.length;i++){
            let count = 0;
            for(let j=start;j<10+start;j++){
                if(discount[j] === want[i]){
                    count++;
                }
            }
            if(count !== number[i]){
                toggle = false;
                break;
            }
        }
        
        if(toggle) answer++;
        start++;
    }
    
    return answer;
}