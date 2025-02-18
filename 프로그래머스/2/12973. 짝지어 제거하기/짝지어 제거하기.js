function solution(s){
    var arr = [];
    for(let item of s){
        if(arr.length > 0 && arr[arr.length-1] === item){
            arr.pop();
        }else{
            arr.push(item);
        }
    }
    return arr.length === 0 ? 1 : 0;
}