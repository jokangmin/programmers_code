function solution(n) {
    var answer = new Array(n).fill().map(item => Array(n).fill(0));
    var num = 0;
    var start_num = 0;
    var end_num = n-1;
    
    for(let loop = 0;loop<n+(n-1);loop++){
        if(loop === 0 || loop % 2 === 0){
            if(loop === 0 || loop % 4 === 0){
                for(let a = start_num;a<=end_num;a++){
                    num++;
                    answer[start_num][a] = num;
                }
                var before_start_num = start_num;
                start_num++;
            }else{
                var before_end_num = end_num;
                end_num--;
                for(let a = end_num;a>=before_start_num;a--){
                    num++;
                    answer[before_end_num][a] = num;
                }
                
            }
        }
        if(loop % 2 !== 0){
            if((loop+1) % 4 !== 0 && n%2 !==0){
                for(let a = start_num;a<=end_num;a++){
                    num++;
                    answer[a][end_num] = num;
                }
            }
            if ((loop + 1) % 4 !== 0 && n % 2 === 0) {
                if (start_num === end_num) {
                    num++;
                    answer[start_num][start_num] = num;
                } else {
                    for (let a = start_num; a <= end_num; a++) {
                        num++;
                        answer[a][end_num] = num;
                    }
                }
            }

            if((loop+1) % 4 === 0){
                for(let a = end_num;a>=start_num;a--){
                    num++;
                    answer[a][before_start_num] = num;
                }
            }
        }
    }
    
    return answer;
}