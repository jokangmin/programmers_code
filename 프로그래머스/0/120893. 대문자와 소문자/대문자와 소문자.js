function solution(my_string) {
    var answer = '';
    for(let i=0;i<my_string.length;i++){
        if(my_string[i].toUpperCase() === my_string[i]){
            answer += my_string[i].toLowerCase();
        }else{
            answer += my_string[i].toUpperCase();
        }
    }
    return answer;
}