function solution(number, k) {
    var answer = [];
    var num_arr = number.split('').map(a => Number(a));
    var len = num_arr.length;
    var start = 0;

    while(answer.length < len - k){
        let max_num = -1;
        let max_index = start;
        
        for(let i=start;i<=k+answer.length;i++){
            if(num_arr[i] > max_num){
                max_num = num_arr[i];
                max_index = i;
            }
        }
        
        answer.push(max_num);
        start = max_index + 1;
    }
    
    return answer.join('').toString();
}