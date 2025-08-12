function solution(s) {
    let answer = 0;
    let i = 0;

    while (i < s.length) {
        const x = s[i];
        let xCount = 0;
        let otherCount = 0;
        let j = i;

        while (j < s.length) {
            if (s[j] === x) {
                xCount++;
            } else {
                otherCount++;
            }

            if (xCount === otherCount) {
                answer++;
                i = j + 1;
                break;
            }

            j++;
        }

        if (j === s.length) {
            answer++;
            break;
        }
    }

    return answer;
}