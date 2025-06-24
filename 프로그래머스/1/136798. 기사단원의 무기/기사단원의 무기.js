function solution(number, limit, power) {
    let totalIron = 0;

    for (let i = 1; i <= number; i++) {
        let count = 0;
        // 약수 개수 구하기 (최적화: i의 제곱근까지)
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count += (j * j === i) ? 1 : 2; // 제곱수면 1개만, 아니면 2개
            }
        }
        totalIron += count > limit ? power : count;
    }

    return totalIron;
}
