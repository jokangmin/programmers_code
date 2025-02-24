function solution(people, limit) {
    var answer = 0;
    var arr = people.sort((a,b) => a-b);
    var left = 0;
    var right = arr.length - 1;
    
    while(left <= right){
        if(arr[left] + arr[right] <= limit){
            left++;
        }
        right--;
        answer++;
    }
    
    return answer;
}