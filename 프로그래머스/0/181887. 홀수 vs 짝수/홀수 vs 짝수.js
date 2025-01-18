function solution(num_list) {
    var answer = 0;
    var even = 0;
    var odd = 0;
    
    for(let i = 1;i<num_list.length+1;i++){
        if(i % 2 == 0) even = even + num_list[i-1];
        if(i % 2 != 0) odd = odd + num_list[i-1];
    }
    if(even <= odd) return answer = odd;
    if(odd <= even) return answer = even;
    
}