function solution(num, total) {
    var answer = [];
    var plus = 0;
    var sum = [];
    var num2 = (num * (num + 1)) / 2;

    while (true) {
        sum = [];
        var start = Math.floor((total - num2) / num) + 1 + plus;

        for (let i = 0; i < num; i++) {
            sum[i] = start + i;
        }

        var arr_sum = sum.reduce((a, total) => a + total, 0);
        if (arr_sum === total) break;

        plus++;
    }

    return sum;
}
