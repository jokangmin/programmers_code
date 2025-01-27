function solution(emergency) {
    const indexArr = [...emergency].sort((a,b) => b-a);
    var answer = new Array(emergency.length);
    
    for(let i=0;i<indexArr.length;i++){
        for(let j=0;j<emergency.length;j++){
            if(emergency[j] === indexArr[i]){
                answer[j] = i+1;
            }
        }
    }
    return answer;
}