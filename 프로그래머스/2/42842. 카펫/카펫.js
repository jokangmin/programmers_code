function solution(brown, yellow) {
    var total = brown + yellow;
    var yak_arr = [];
    var width = 0;
    var height = 0;
    
    for(let i=3;i<total;i++){
        if(total % i === 0 && i < brown){
            yak_arr.push(i);
        }
    }
    for(let i=0;i<yak_arr.length;i++){
        for(let j=i;j<yak_arr.length;j++){
            if(yak_arr[i]*yak_arr[j] === total && (yak_arr[i]-2)*(yak_arr[j]-2) === yellow){
                if(yak_arr[i]>yak_arr[j]){
                    return [yak_arr[i], yak_arr[j]];
                }else{
                    return [yak_arr[j], yak_arr[i]];
                }
            }
        }
    }
}
