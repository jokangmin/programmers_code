function solution(myString) {
    return answer = myString.split("").map(item => item < "l" ? "l" : item).join('');
}