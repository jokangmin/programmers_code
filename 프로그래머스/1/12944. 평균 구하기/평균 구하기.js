function solution(arr) {
    return arr.reduce((a,total) => a + total ,0) / arr.length;
}