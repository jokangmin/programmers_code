function solution(numbers, target) {
    
    function dfs(numbers, target, num){
        let count = 0;
        if(num === numbers.length){
            if(numbers.reduce((a,total) => a + total, 0) === target) return 1;
            else return 0;
        }else{
            count += dfs(numbers, target, num+1);
            numbers[num] *= -1;
            count += dfs(numbers, target, num+1);
            return count;
        }
    }
    
    return dfs(numbers, target, 0);
}