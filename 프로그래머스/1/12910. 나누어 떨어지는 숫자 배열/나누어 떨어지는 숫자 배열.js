function solution(arr, divisor) {
    var filtered = arr.filter(a => a % divisor === 0).sort((a, b) => a - b);
    return filtered.length ? filtered : [-1];
}
