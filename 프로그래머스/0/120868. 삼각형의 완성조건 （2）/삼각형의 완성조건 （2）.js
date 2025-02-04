function solution(sides) {
    var arr = [...sides].sort((a,b) => b-a);
    var num = 0;
    for(let i = arr[0]-arr[1]+1; i <= arr[0] ;i++){
        num++;
    }
    for(let i = arr[0]+1; i < arr[0]+arr[1] ;i++){
        num++;
    }
    return num;
}