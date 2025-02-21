function solution(s) {
    var answer = '';
    var number = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    for(let a=0;a<s.length;){
        if(!isNaN(s[a])){
            answer += s[a];
            s = s.slice(1);
        }else{
            for(let i=0;i<number.length;i++){
                if(number[i] === s.slice(0,number[i].length)){
                    s = s.slice(number[i].length);
                    answer += i;
                }
            }
        }
    }
    return Number(answer);
}