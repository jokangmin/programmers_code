function solution(n, wires) {
    let minDiff = Infinity;

    function buildGraph(n, wires) {
        let graph = Array.from({ length: n + 1 }, () => []);
        for (let [a, b] of wires) {
            graph[a].push(b);
            graph[b].push(a);
        }
        return graph;
    }

    // BFS를 이용하여 네트워크의 크기를 구하는 함수
    function bfs(start, removedWire, graph) {
        let visited = new Array(n + 1).fill(false);
        let queue = [start];
        visited[start] = true;
        let count = 1;

        while (queue.length > 0) {
            let node = queue.shift();
            for (let neighbor of graph[node]) {
                // 제거된 간선은 무시
                if (!visited[neighbor] && !(node === removedWire[0] && neighbor === removedWire[1]) 
                    && !(node === removedWire[1] && neighbor === removedWire[0])) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                    count++;
                }
            }
        }
        return count;
    }

    // 각 간선을 제거하면서 최소 차이를 찾기
    for (let i = 0; i < wires.length; i++) {
        let graph = buildGraph(n, wires);
        let removedWire = wires[i];

        // 한쪽 네트워크 크기 구하기
        let networkSize = bfs(removedWire[0], removedWire, graph);
        let otherSize = n - networkSize;

        // 두 네트워크 크기의 차이 최소값 갱신
        minDiff = Math.min(minDiff, Math.abs(networkSize - otherSize));
    }

    return minDiff;
}
