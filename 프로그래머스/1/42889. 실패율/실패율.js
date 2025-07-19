function solution(N, stages) {
    var map1 = new Map();
    
    for(let i=1;i<N+1;i++){
        let not_clear = 0;
        let stage_in = 0;
        for(let j=0;j<stages.length;j++){
            if(i <= stages[j]){
                stage_in++;
            }
            if(i === stages[j]){
                not_clear++;
            }
        }
        map1.set(i,not_clear/stage_in);
    }
    
    return [...map1].sort((a,b) => b[1]-a[1]).map(v => v[0]);
}