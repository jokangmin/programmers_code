function solution(arr, queries) {
    var answer = [];
    for(let j = 0;j<queries.length;j++){
        for(let i = 0;i<arr.length;i++){
            if(queries[j][0] <= i && queries[j][1] >= i) arr[i] = arr[i] + 1 
        }
   }
    return answer.concat(arr);
}