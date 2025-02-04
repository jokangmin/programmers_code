function solution(my_string) {
    var arr = my_string.split(' ');
    var total = Number(arr[0]);;
    for(let i = 1;i<arr.length;i+=2){
        let operator = arr[i];
        let nextNum = Number(arr[i + 1]);
        
        if (operator === "+") {
            total += nextNum;
        } else if (operator === "-") {
            total -= nextNum;
        }
    }
    
    return total;
}