function solution(arr){
    var arr2 = [];
    for(let i =0;i<arr.length;i++){
        if(i === 0 || arr[i] !== arr[i-1]){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}