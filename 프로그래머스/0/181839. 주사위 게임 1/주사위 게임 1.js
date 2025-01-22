function solution(a, b) {
    var answer = 0;
    if(a%2==0 && b%2==0) return answer = a >= b ? a-b : b-a;
    else if(a%2!=0 && b%2!=0) return answer = a*a + b*b;
    else if((a%2!=0&&b%2==0)||(a%2==0&&b%2!=0)) return answer = 2*(a+b);
}