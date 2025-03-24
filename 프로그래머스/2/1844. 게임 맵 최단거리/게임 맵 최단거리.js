function solution(maps) {
    if (maps.length === 0 || maps[0].length === 0) return -1;
    if (maps[0][0] === 0) return -1;

    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    var visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
    visited[0][0] = true;
    let queue = [[0, 0, 1]];
    let idx = 0;

    while (idx < queue.length) {
        const [x, y, count] = queue[idx];
        idx++;
        
        if (x === maps[0].length - 1 && y === maps.length - 1) {
            return count;
        }

        for (let [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && ny >= 0 && nx < maps[0].length && ny < maps.length && maps[ny][nx] === 1 && !visited[ny][nx]) {
                visited[ny][nx] = true;
                queue.push([nx, ny, count + 1]);
            }
        }
    }

    return -1;
}
