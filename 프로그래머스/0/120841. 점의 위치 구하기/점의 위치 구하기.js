function solution(dot) {
    var answer = 0;
    return answer = dot[0] >= 0 && dot[1] >= 0 ? 1 :
    dot[0] < 0 && dot[1] >= 0 ? 2 :
    dot[0] < 0 && dot[1] < 0 ? 3 :
    dot[0] >= 0 && dot[1] < 0 ? 4 : 0;
}