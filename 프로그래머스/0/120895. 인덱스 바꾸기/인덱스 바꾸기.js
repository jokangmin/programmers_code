function solution(my_string, num1, num2) {
    var arr = my_string.split('');
    [arr[num1],arr[num2]]=[arr[num2],arr[num1]]
    return arr.join('');
}