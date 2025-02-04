function solution(s) {
    var arr = s.split(' ');
    var sum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === "Z"){
            sum -= Number(arr[i-1]);
        }else{
            sum += Number(arr[i]);
        }
    }
    return sum;
}