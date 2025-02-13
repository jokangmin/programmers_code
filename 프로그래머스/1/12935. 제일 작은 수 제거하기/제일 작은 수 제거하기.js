function solution(arr) {
    return arr.length <= 1 ? [-1] : arr.filter(a => a !== Math.min(...arr));
}