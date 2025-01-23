function solution(rank, attendance) {
    var answer = 0;
    var rank2 = [];
    
    for(let i=0;i<rank.length;i++){
        if(attendance[i] === true){
            rank2.push(rank[i]);
        }
    }
    rank2 = rank2.sort((a, b) => a - b);
    
    var a = rank.indexOf(rank2[0]);
    var b = rank.indexOf(rank2[1]);
    var c = rank.indexOf(rank2[2]);
    
    return answer = 10000 * a + 100 * b + c;
}