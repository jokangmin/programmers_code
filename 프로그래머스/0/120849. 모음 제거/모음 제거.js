function solution(my_string) {
    return answer = my_string.split('').filter(a => !a.includes("a")).filter(a => !a.includes("e")).filter(a => !a.includes("i")).filter(a => !a.includes("o")).filter(a => !a.includes("u")).join('');
}