function solution(numbers) {
    var answer = new Set();
    for(let i=0;i<numbers.length;i++){
        for(let a=i+1;a<numbers.length;a++){
            answer.add(numbers[i] + numbers[a]);
        }
    }
    return [...answer].sort((a,b) => a-b);
}