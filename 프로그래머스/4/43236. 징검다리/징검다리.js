function solution(distance, rocks, n) {
    let left = 1;
    let right = distance;
    let answer = right;
    
    rocks.sort((a,b) => a-b);
    rocks.push(distance);
    
    while(left <= right){
        let removed = 0;
        let prev = 0;
        const mid = Math.floor((left + right)/2)
        
        for(let i=0;i<rocks.length;i++){
            if(rocks[i] - prev < mid){
                removed++;
            }else{
                prev = rocks[i]; 
            }
        }
        
        if (removed > n) {
            right = mid - 1;
        } else {
            answer = mid;
            left = mid + 1;
        }
        
    }
    
    return answer;
}