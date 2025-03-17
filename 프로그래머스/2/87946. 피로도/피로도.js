function solution(k, dungeons) {
    var answer = 0;

    function dfs(k, count, visited) {
        answer = Math.max(answer, count);

        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && k >= dungeons[i][0]) {
                visited[i] = true;
                dfs(k - dungeons[i][1], count + 1, visited);
                visited[i] = false;
            }
        }
    }

    dfs(k, 0, Array(dungeons.length).fill(false));

    return answer;
}
