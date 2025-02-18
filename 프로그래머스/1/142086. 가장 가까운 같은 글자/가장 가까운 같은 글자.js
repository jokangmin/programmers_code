function solution(s) {
    var last_num = 0;
    var arr = [];
    var result = [];
    for(let i=0;i<s.length;i++){
        if(arr.includes(s[i])){
            result[i] = i - arr.lastIndexOf(s[i]);
        }else{
            result[i] = -1;
        }
        arr[i] = s[i];
    }
    return result;
}