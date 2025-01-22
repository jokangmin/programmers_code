function solution(n_str) {
    var num = 0;
    
    for(let i = 0;i<n_str.length;i++){
        if(n_str[i] !== "0"){
            num = n_str.indexOf(n_str[i]);
            break;
        }
    }
    return answer = n_str.slice(num,n_str.length);
}