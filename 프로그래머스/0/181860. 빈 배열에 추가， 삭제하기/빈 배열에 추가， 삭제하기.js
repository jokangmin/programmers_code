function solution(arr, flag) {
    var answer = [];
    
    for(let i = 0;i<arr.length;i++){
        if(flag[i]){
            for(let a=0;a<arr[i]*2;a++){
                answer.push(arr[i]);
            }
        }else{
            for(let a=0;a<arr[i];a++){
                answer.pop(arr[i]);
            }
        }
    }
    
    return answer;
}