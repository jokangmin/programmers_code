function solution(arr) {
    var answer = [];
    var first_index = 0;
    var last_index = 0;
    var toggle = false;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] == 2 && toggle == false){
            first_index = i;
            toggle = true;
        }
        if(arr[i] == 2 && toggle == true){
            last_index = i+1;
        }
    }
    
    if(toggle == true) answer = arr.slice(first_index,last_index);
    else answer.push(-1);
        
    return answer;
}