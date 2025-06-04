function solution(order) {
    var answer = 0;
    var sub_belt = [];
    var now_index = 0;
    var now_num = 1;
    
    while(now_num <= order.length){
        if(now_num === order[now_index]){
            answer++;
            now_index++;
        }else{
            sub_belt.push(now_num);
        }
        
        while(sub_belt.length > 0){
            if(sub_belt[sub_belt.length-1] === order[now_index]){
                answer++;
                now_index++;
                sub_belt.pop();
            }else{
                break;
            }
        }
        
        now_num++;
    }
    
    
    return answer;
}