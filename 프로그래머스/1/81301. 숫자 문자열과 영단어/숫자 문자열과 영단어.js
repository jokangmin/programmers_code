function solution(s) {
    var answer = s;
    var number = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    
    for(let i=0;i<number.length;i++){
        let arr = answer.split(number[i]);
        answer = arr.join(i);
    }
    return Number(answer);
}