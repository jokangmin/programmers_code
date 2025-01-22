function solution(arr) {
    var num = 0;
    while(Math.pow(2,num) < arr.length){
        num++;
    }
    
    while (arr.length < Math.pow(2, num)) {
        arr.push(0);
    }
    
    return answer = arr;
}