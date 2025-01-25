function solution(numbers) {
    return numbers.sort((a,b) => a-b)[numbers.length-1]*numbers.sort((a,b) => a-b)[numbers.length-2];
}