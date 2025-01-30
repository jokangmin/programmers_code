function solution(my_string) {
    var arr = my_string.split('');
    var num = '';
    var result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && arr[i] !== ' ') { 
            num += arr[i];
        } else if (num !== '') {
            result += Number(num);
            num = '';
        }
    }

    if (num !== '') {
        result += Number(num);
    }

    return result;
}
