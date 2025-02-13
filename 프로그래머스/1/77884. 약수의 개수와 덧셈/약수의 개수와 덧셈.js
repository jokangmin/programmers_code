function solution(left, right) {
    var answer = 0;
    var arr = [];
    var arr2 = [];
    
    for(let a = left;a<=right;a++){
        arr[a-left] = 0;
        arr2[a-left] = a;
        for(let i=1;i<=a;i++){
            if(a%i === 0){
                arr[a-left] += 1;
            }
        }
    }
    for(let i = 0;i<arr.length;i++){
        if(arr[i]%2 === 0){
            answer += arr2[i];
        }else{
            answer -= arr2[i];
        }
    }
    return answer;
}