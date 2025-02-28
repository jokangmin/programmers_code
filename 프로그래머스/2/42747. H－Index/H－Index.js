function solution(citations) {
    var answer = 0;
    var number = 0;
    for(let i=0;i<=Math.max(...citations);i++){ //0~6
        number = 0;
        for(let j=0;j<citations.length;j++){
            if(citations[j] >= i){
                number++;
            }
        }
        if(number >= i && citations.length-number <= i && answer < i){
            answer = i;
        }
    }
    return answer;
}