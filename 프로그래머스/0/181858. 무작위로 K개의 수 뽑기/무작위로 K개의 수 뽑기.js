function solution(arr, k) {
    var answer = [];
    var newSet = new Set(arr);
    var newArr = [...newSet];
    var num = 0;
    for(let i = 0;i<k;i++){
        if(num < k){
            if(newArr.length <= num){
                answer.push(-1);
                num++;
            }else{
                answer.push(newArr[i]);
                num++;
            }
        }
    }
    return answer;
}