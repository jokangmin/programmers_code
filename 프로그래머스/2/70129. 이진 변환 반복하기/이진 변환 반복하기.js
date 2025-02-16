function solution(s) {
    var num1 = 1;
    var num2 = 0;
    while(true){
        num2 += s.length - (s.split('').filter(a => a !== "0").join('').length);
        s = (s.split('').filter(a => a !== "0").join('').length).toString(2);
        if(s === "1") return [num1,num2];
        else num1++;
    }
}