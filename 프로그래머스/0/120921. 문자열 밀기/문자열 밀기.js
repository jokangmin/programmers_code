function solution(A, B) {
    var a_val = new Array(A.length).fill(0);
    var A_arr = A.split('');
    var num = 0;
    
    if(A === B){
        return 0;
    }
    
    while(num < A.length){
        for(let i = 0;i<A_arr.length;i++){
            if(i+1 === A_arr.length){
                a_val[0] = A_arr[A_arr.length-1];
            }else{
                a_val[i+1] = A_arr[i];
            }
        }
        
        A_arr = a_val.slice();
        
        if(a_val.join('') === B){
            return num + 1;
        }
        
        num++;
    }
    
    return -1 ;
}