function solution(my_string) {
    var answer = 0;
    return answer = my_string.split('').filter(a => !isNaN(a)).reduce((total,b) => total + Number(b),0);
}