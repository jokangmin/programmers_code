function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    let answer = right;
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2);

        const processed = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
        
        if (processed >= n) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return answer;
}