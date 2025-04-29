function solution(n, results) {
    var answer = 0;
    const win = Array.from({length: n + 1}, () => []);
    const lose = Array.from({length: n + 1}, () => []);
    
    for(const [a, b] of results){
        win[a].push(b); 
        lose[b].push(a);
    }
   
    function dfs(graph, index, visited){
        for(const item of graph[index]){
            if(!visited.has(item)){
                visited.add(item);
                dfs(graph, item, visited);
            }
        }
    }
    
    for(let i=1;i<=n;i++){
        const winVisited = new Set();
        const loseVisited = new Set();

        dfs(win, i, winVisited);
        dfs(lose, i, loseVisited);
        
        if(winVisited.size + loseVisited.size === n - 1){
            answer++;
        }
    }
    
    return answer;
}