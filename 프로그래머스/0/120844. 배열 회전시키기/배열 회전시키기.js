function solution(numbers, direction) {
    var answer = [];
    for(let i = 0;i<numbers.length-1;i++){
        if(direction === "right"){
            answer[i+1] = numbers[i];
        }
        if(direction === "left"){
            answer[i-1] = numbers[i];
        }
    }
    if(direction === "right"){
        answer[0] = numbers[numbers.length-1];
    }
    if(direction === "left"){
        answer[numbers.length-2] = numbers[numbers.length-1];
        answer[numbers.length-1] = numbers[0];
    }
    return answer;
}