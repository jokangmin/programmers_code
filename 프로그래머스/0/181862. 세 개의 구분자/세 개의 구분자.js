function solution(myStr) {
    var answer = myStr.split('a').join(',').split('b').join(',').split('c').
    join(',').split(',').filter(a => a != "");
    if(answer == '') return answer[0] = ["EMPTY"];
    else return answer;
}