function solution(progresses, speeds) {
    var answer = [];
    var count = 0;
    var num = 1; //test용
    
    while(progresses.length > 0){
        console.log(num + " 번째 , " + progresses);
        num++;
        for(let i=0;i<progresses.length;i++){
            progresses[i] += speeds[i];
        }
        if(progresses[0] >= 100){
            progresses.shift();
            speeds.shift();
            count++;
            for(let a=0;a<progresses.length;){
                if(progresses[0] >= 100){
                    progresses.shift();
                    speeds.shift();
                    count++;
                }else{
                    break;
                }
            }
            console.log(count)
            answer.push(count);
            count = 0;
        }
    }
    
    return answer;
}