function solution(land) {
    for(let i=1;i<land.length;i++){
        for(let a=0;a<4;a++){
            const max_num = Math.max(...land[i-1].filter((_,idx) => idx !== a));
            land[i][a] += max_num;
        }
    }
    
    return Math.max(...land[land.length - 1]);
}