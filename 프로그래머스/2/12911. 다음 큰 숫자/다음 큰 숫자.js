function solution(n) {
    var answer = 0;
    for(let i=n+1;;i++){
        if(i.toString(2).split('').filter(a => a === "1").length === n.toString(2).split('').filter(a => a === "1").length){
            return i;
        }
    }
}