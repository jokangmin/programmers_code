function solution(x, y, n) {
    if (x === y) return 0;

    const visited = new Set();
    let currentDepth = 0;
    let currentLayer = new Set([x]);

    visited.add(x);

    while (currentLayer.size > 0) {
        currentDepth++;

        const nextLayer = new Set();

        for (let num of currentLayer) {
            for (let next of [num + n, num * 2, num * 3]) {
                if (next === y) return currentDepth;
                if (next > y || visited.has(next)) continue;

                visited.add(next);
                nextLayer.add(next);
            }
        }

        currentLayer = nextLayer;
    }

    return -1;
}
