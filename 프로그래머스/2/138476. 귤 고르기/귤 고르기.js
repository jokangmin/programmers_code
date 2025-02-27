function solution(k, tangerine) {
    var num = 0;
    var arr = new Array(Math.max(...tangerine)).fill(0);
    
    tangerine.sort((a,b) => a-b);
    for(let i=0;i<tangerine.length;i++){
        arr[tangerine[i]-1] += 1;
    }
    
    arr.sort((a,b) => b-a)
    for(let i=0;i<arr.length;i++){
        num += arr[i]
        if(num >= k){
            return i + 1;
        }
    }
    
}