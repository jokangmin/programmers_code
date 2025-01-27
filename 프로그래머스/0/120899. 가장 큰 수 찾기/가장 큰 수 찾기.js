function solution(array) {
    var num = [...array].sort((a,b) => b-a)[0];
    var index = array.indexOf(num);
    return [num,index];
}