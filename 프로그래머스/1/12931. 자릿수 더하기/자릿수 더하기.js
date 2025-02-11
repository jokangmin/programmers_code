function solution(n)
{
    return n.toString().split('').reduce((total,a) => total + Number(a),0);
}