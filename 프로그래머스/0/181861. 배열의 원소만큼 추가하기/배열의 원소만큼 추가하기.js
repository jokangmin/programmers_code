function solution(arr) {
    var answer = [];
    
    for(let i =0;i<arr.length;i++){
        for(let a = arr[i];a>0;a--){
            answer.push(arr[i]);
        }
    }
    return answer;
}