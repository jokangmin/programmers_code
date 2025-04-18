function solution(arr1, arr2) {
    var answer = Array.from({length: arr1.length}, (a,_) => Array(arr2[0].length));
    
    for(let i=0;i<arr1.length;i++){
        for(let a=0;a<arr2[0].length;a++){
            let sum = 0;
            for(let j=0;j<arr1[0].length;j++){
                sum += arr1[i][j] * arr2[j][a];
            }
            answer[i][a] = sum;
        }
    }
    
    return answer;
}