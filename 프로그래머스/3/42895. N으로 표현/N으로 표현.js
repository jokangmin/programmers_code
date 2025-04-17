function solution(N, number) {
    if (N === number) return 1;

    const dp = Array.from({ length: 9 }, () => new Set());

    for (let i = 1; i <= 8; i++) {
        const repeated = Number(String(N).repeat(i));
        dp[i].add(repeated);

        for (let j = 1; j < i; j++) {
            for (let a of dp[j]) {
                for (let b of dp[i - j]) {
                    dp[i].add(a + b);
                    dp[i].add(a - b);
                    dp[i].add(b - a);
                    dp[i].add(a * b);
                    if (b !== 0) dp[i].add(Math.floor(a / b));
                    if (a !== 0) dp[i].add(Math.floor(b / a));
                }
            }
        }

        if (dp[i].has(number)) return i;
    }

    return -1;
}
