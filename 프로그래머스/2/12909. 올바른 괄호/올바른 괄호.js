function solution(s){
    var balance = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            balance++;
        }else{
            balance--;
            if (balance < 0) return false;
        }
    }
    return balance === 0;
}