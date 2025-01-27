function solution(my_string) {
    return my_string.split('').filter(a => !isNaN(a)).sort((a,b) => a-b).map(a => Number(a));
}