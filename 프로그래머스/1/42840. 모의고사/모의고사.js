function solution(answers) {
    var result = [];
    var suphoja_list = [[1, 2, 3, 4, 5],
                        [2, 1, 2, 3, 2, 4, 2, 5],
                        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    var sum = 0;
    var max = 0;
    
    for(let i=0;i<suphoja_list.length;i++){ //0~3
        sum = 0;
        for(let j=0;j<answers.length;j++){
            if(j > suphoja_list[i].length-1){
                if(suphoja_list[i][j - (suphoja_list[i].length * Math.floor(j / suphoja_list[i].length))] === answers[j]){
                    sum++;
                }
            }else{
                if(suphoja_list[i][j] === answers[j]){
                    sum++;
                }
            }
        }
        
        suphoja_list[i][0] = sum;
        if(sum >= max){
            max = sum;
        }
    }
    
    for(let i=0;i<suphoja_list.length;i++){
        if(suphoja_list[i][0] === max){
            result.push(i+1);
        }
    }
    

    return result;
}