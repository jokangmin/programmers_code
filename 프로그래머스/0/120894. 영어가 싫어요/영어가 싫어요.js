function solution(numbers) {
    var answer = [];
    var num_list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var now_num = '';
    
    for(let a = 0;a<numbers.length;a++){
        now_num += numbers[a];
        for(let i = 0;i<num_list.length;i++){
            if(now_num === num_list[i]){
                answer.push(num_list.indexOf(num_list[i]));
                now_num = '';
            }
        }
    }
    
    return Number(answer.join(''));
}