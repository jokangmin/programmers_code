function solution(myString) {
    var answer = [];
    return answer = myString.split('x').filter(item => item != '').sort();
}