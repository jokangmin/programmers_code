function solution(nums) {
    var answer = 0;
    var num = nums.length / 2;
    var arr = [...new Set(nums)];
    for(let i=0;i<arr.length;i++){
        if(i === num){
            break;
        }else{
            answer++;
        }
    }
    
    return answer;
}