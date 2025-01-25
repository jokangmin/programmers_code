function solution(array) {
    return answer = array.sort((a,b) => a-b)[Math.floor(array.length/2)];
}