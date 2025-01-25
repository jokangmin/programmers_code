function solution(num_list) {
    var arr = [];
    for(let i=0;i<num_list.length;i++){
        arr[i] = num_list[num_list.length-i-1];
    }
    
    return arr;
}