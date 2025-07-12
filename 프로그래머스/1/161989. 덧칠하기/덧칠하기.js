function solution(n, m, section) {
    let answer = 0;
    let i = 0;

    while (i < section.length) {  
        const start = section[i];
        const end = start + m - 1;
        answer++;

        // 롤러가 칠한 범위 안에 있는 section들은 모두 생략
        while (i < section.length && section[i] <= end) {
            i++;
        }
    }

    return answer;
}
