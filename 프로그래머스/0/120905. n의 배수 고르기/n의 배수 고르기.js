function solution(n, numlist) {
    return numlist.filter(a => a % n === 0);
}