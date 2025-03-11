function solution(priorities, location) {
    var answer = [];
    var priorities_arr = priorities.map((a,index) => [index, a]);
    
    while(priorities_arr.length > 0){
        let first = priorities_arr.shift();
        let toggle = false;
        
        for(let i=0;i<priorities_arr.length;i++){
            if(first[1] < priorities_arr[i][1]){
                toggle = true;
                break;
            }
        }
        
        if(toggle){
            priorities_arr.push(first);
        }else{
            answer.push(first[0]);
            if(first[0] === location) return answer.length;
        }
    }
}