function solution(food) {
    var answer = '';
    for(let i=0;i<food.length;i++){
        let num = Math.floor(food[i]/2);
        for(let j=0;j<num;j++){
            answer += i;
        }
    }
    return answer + 0 + answer.split('').reverse().join('');
}