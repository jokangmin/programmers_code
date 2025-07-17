function solution(dirs) {
    let x_index = 0;
    let y_index = 0;
    const visitedPaths = new Set();
    
    for (let i = 0; i < dirs.length; i++) {
        const prevX = x_index;
        const prevY = y_index;
        let moved = false;

        if (dirs[i] === "U") {
            if (y_index !== 5) {
                y_index += 1;
                moved = true;
            }
        } else if (dirs[i] === "D") {
            if (y_index !== -5) {
                y_index -= 1;
                moved = true;
            }
        } else if (dirs[i] === "R") {
            if (x_index !== 5) {
                x_index += 1;
                moved = true;
            }
        } else if (dirs[i] === "L") {
            if (x_index !== -5) {
                x_index -= 1;
                moved = true;
            }
        }

        if (moved) {
            let pathKey1 = `${prevX},${prevY},${x_index},${y_index}`;
            let pathKey2 = `${x_index},${y_index},${prevX},${prevY}`;
            
            const uniquePathKey = pathKey1 < pathKey2 ? pathKey1 : pathKey2;

            if (!visitedPaths.has(uniquePathKey)) {
                visitedPaths.add(uniquePathKey);
            }
        }
    }
    
    return visitedPaths.size;
}