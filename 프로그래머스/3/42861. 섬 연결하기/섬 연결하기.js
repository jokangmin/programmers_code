function solution(n, costs) {
    var total = 0;
    let connected = new Set();
    costs.sort((a,b) => a[2] - b[2]);
    
    connected.add(costs[0][0]);
    
    while (connected.size < n) {
        for(let i=0;i<costs.length;i++){
            const [from, to, cost] = costs[i];

            if (connected.has(from) && !connected.has(to)) {
                connected.add(to);
                total += cost;
                break;
            }
            if (connected.has(to) && !connected.has(from)) {
                connected.add(from);
                total += cost;
                break;
            }
        }
    }
    
    return total;
}
