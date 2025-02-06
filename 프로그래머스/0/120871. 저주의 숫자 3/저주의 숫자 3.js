function solution(n) {
    var answer = 0;
    var count = 0;
    
    while (count < n) {
        answer++;
        if (answer % 3 === 0 || answer.toString().includes('3')) {
            continue;
        }
        count++;
    }

    return answer;
}