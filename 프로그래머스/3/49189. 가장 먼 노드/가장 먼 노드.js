function solution(n, edge) {
    const graph = Array.from({ length: n + 1 }, () => []); //index: 0 은 무시한다.
    const visited = Array(n + 1).fill(false); //[false,false,false,false,false,false,false]
    const distance = Array(n + 1).fill(0); //[0,0,0,0,0,0,0] 거리

    for(const [a, b] of edge) { //[[],[3,2],[3,1,4,5],[6,4,2,1],[3,2],[2],[3]]
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const queue = [1]; // 꺼내는 위치
    visited[1] = true;
    
    while(queue.length > 0){
        const node = queue.shift();
        
        for(const next of graph[node]){
            if(!visited[next]){
                visited[next] = true;
                distance[next] = distance[node] + 1;
                queue.push(next);
            }
        }
    }
    
    const max = Math.max(...distance);
    return distance.filter(a => a === max).length;
}
