function solution(m, n, puddles) {
    const MOD = 1e9 + 7;
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    const isPuddle = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));

    // 웅덩이 표시
    for (const [x, y] of puddles) {
        isPuddle[y][x] = true;
    }

    dp[1][1] = 1;

    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= m; x++) {
            if (y === 1 && x === 1) continue;
            if (isPuddle[y][x]) {
                dp[y][x] = 0;
            } else {
                dp[y][x] = (dp[y - 1][x] + dp[y][x - 1]) % MOD;
            }
        }
    }

    return dp[n][m];
}
