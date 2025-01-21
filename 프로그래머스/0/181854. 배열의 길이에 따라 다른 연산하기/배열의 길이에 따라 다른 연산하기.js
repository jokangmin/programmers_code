function solution(arr, n) {
    return arr.length % 2 === 0
        ? arr.map((a, i) => (i % 2 !== 0 ? a + n : a)) // arr의 길이가 짝수일 때, 홀수 인덱스에 n을 더함
        : arr.map((a, i) => (i % 2 === 0 ? a + n : a)); // arr의 길이가 홀수일 때, 짝수 인덱스에 n을 더함
}
