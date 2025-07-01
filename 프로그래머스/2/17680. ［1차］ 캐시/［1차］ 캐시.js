function solution(cacheSize, cities) {
    let cache = [];
    let time = 0;

    cities.forEach(city => {
        city = city.toLowerCase();

        const index = cache.indexOf(city);
        if (index !== -1) {
            // cache hit
            cache.splice(index, 1);     // 해당 항목 제거
            time += 1;
        } else {
            // cache miss
            time += 5;
            if (cacheSize > 0 && cache.length >= cacheSize) {
                cache.shift(); // 가장 오래된 항목 제거
            }
        }

        if (cacheSize > 0) {
            cache.push(city); // 항상 맨 뒤로 넣음
        }
    });

    return time;
}
