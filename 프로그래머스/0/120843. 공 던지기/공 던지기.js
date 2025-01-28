function solution(numbers, k) {
    var index = 0;
    for (let i = 0; i < k - 1; i++) {
        index = (index + 2) % numbers.length;
    }
    return numbers[index];
}
