function solution(n, lost, reserve) {
    let realLost = lost.filter(l => !reserve.includes(l));
    let realReserve = reserve.filter(r => !lost.includes(r));

    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);

    for (let i=0;i<realReserve.length;i++) {
        let before = realReserve[i] - 1;
        let after = realReserve[i] + 1;

        const idx = realLost.findIndex(index => index === before || index === after);
        if (idx !== -1) {
            realLost.splice(idx, 1);
        }
    }

    return n - realLost.length;
}
