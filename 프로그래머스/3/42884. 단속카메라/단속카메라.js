function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    let camera = -30001;
    let count = 0;

    for (let i=0;i<routes.length;i++) {
        const [start, end] = routes[i];
        if (camera<start) {
            camera = end;
            count++;
        }
    }

    return count;
}
