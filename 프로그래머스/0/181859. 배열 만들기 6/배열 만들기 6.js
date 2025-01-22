function solution(arr) {
    var stk = [];
    
    for(let idx = 0;idx<arr.length;){
        if(stk.length == 0){
            stk.push(arr[idx]);
            idx++;
        }else{
            if(stk[stk.length-1] === arr[idx]){
                stk.pop();
                idx++;
            }else{
                stk.push(arr[idx]);
                idx++;
            }
        }
    }
    if(stk.length === 0) stk[0] = -1;
    
    return stk;
}