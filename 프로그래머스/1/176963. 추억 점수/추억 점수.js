function solution(name, yearning, photo) {
    const scoreMap = {};
    name.forEach((n, i) => {
        scoreMap[n] = yearning[i];
    });

    return photo.map(group =>
        group.reduce((sum, person) => sum + (scoreMap[person] || 0), 0)
    );
}
