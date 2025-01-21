function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length > arr2.length){
        return answer = 1;
    }else if(arr1.length < arr2.length){
        return answer = -1;
    }else if(arr1.length === arr2.length){
        if(arr1.reduce((total,a) => total + a,0) > arr2.reduce((total,a) => total + a,0)){
            return answer = 1;
        }else if(arr1.reduce((total,a) => total + a,0) < arr2.reduce((total,a) => total + a,0)){
            return answer = -1;
        }else{
            return answer = 0;
        }
    }
    
}