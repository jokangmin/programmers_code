function solution(s, n) {
    var arr = s.split('');
    arr = arr.map(a => a.charCodeAt());
    for(let i=0;i<arr.length;i++){
        if(arr[i] >= 65 && arr[i] <= 90){
            arr[i] = (arr[i] - 65 + n) % 26 + 65;
        }
        else if (arr[i] >= 97 && arr[i] <= 122) {
            arr[i] = (arr[i] - 97 + n) % 26 + 97;
        }
    }
    return arr.map(a => String.fromCharCode(a)).join('');
}