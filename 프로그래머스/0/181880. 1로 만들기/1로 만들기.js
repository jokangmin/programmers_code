function solution(num_list) {
    var answer = 0;
    for(let i = 0;i<num_list.length;i++){
        while(true){
            if(num_list[i] != 1){
                num_list[i] = (num_list[i] % 2 == 0) ? num_list[i]/2 : (num_list[i]-1)/2;
                answer++;
            }else{
                break;
            }
        }
    }
    return answer;
}