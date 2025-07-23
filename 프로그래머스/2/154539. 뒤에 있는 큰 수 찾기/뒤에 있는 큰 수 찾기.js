function solution(numbers) {
    const n = numbers.length;
    const answer = Array(n).fill(-1); 
    const stack = []; 
    
    for(let i=0;i<n;i++) {
        const currentNum = numbers[i];

        while (stack.length > 0 && numbers[stack[stack.length - 1]] < currentNum) {
            const indexToUpdate = stack.pop();
            answer[indexToUpdate] = currentNum;
        }
        stack.push(i);
    }
            
    return answer;
}