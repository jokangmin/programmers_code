function solution(s) {
    var answer = '';
    var arr = s.split(' ');
    
    for(let i =0;i<arr.length;i++){
        let arr2 = arr[i].split('');
        for(let j =0;j<arr2.length;j++){
            if(j === 0 || j%2 === 0){
                arr2[j] = arr2[j].toUpperCase();
            }else{
                arr2[j] = arr2[j].toLowerCase();
            }
        }
        arr[i] = arr2.join('');
    }
    
    return arr.join(' ');
}