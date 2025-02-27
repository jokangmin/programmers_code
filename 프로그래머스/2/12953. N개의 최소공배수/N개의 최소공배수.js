function solution(arr) {
    var lcm = 2;
    while(true){
        for(let i=0;i<arr.length;i++){
            if(lcm % arr[i] === 0 && lcm % arr[i] === 0){
                if(i === arr.length-1){
                    return lcm;
                }
            }else{
                break;
            }
        }
        lcm++;
    }
}