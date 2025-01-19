function solution(arr) {
    var answer = 0;
    var arr2 = [...arr];
    
    while(true){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 50 && arr[i] % 2 != 0) {
                arr[i] = (arr[i] * 2) + 1;
            } else if (arr[i] >= 50 && arr[i] % 2 == 0) {
                arr[i] /= 2;
            }
        }
        if(arr.every((a,i) => a === arr2[i])){
            break;
        }else{
            arr2 = [...arr];
            answer++;
        }
    }
    
    return answer;
}