function solution(strArr) {
    var answer = 0;
    var num1 = 0;
    var num2 = 0;
    for(let i = 1;i<=30;i++){
        num1 = strArr.map(item => item.length).reduce((total,a) => total + (i === a),0);
        if(num2 < num1){
            num2 = num1;
        }
    }
    return answer = num2;
}