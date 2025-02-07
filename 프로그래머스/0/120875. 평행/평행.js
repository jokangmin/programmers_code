function solution(dots) {
    var num1 = Math.abs(dots[0][0] - dots[1][0]);
    var num2 = Math.abs(dots[0][1] - dots[1][1]);
    var num3 = Math.abs(dots[2][0] - dots[3][0]);
    var num4 = Math.abs(dots[2][1] - dots[3][1]);
    
    var num5 = Math.abs(dots[0][0] - dots[2][0]);
    var num6 = Math.abs(dots[0][1] - dots[2][1]);
    var num7 = Math.abs(dots[1][0] - dots[3][0]);
    var num8 = Math.abs(dots[1][1] - dots[3][1]);
    
    return num1 === num3 && num2 === num4 ? 1 : 
    num1 === num2 && num3 === num4 ? 1 :
    num5 === num7 && num6 === num8 ? 1 :
    num5 === num6 && num7 === num8 ? 1 : 0;
}