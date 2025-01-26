function solution(my_string, letter) {
    return answer = my_string.split('').filter(a => a !== letter).join('');
}