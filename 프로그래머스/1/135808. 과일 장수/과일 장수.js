function solution(k, m, score) {
    score.sort((a, b) => b - a);
    
    let profit = 0;

    for (let i = 0; i + m <= score.length; i += m) {
        const minScore = score[i + m - 1];
        profit += minScore * m;
    }

    return profit;
}
