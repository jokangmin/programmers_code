function solution(keyinput, board) {
    var result = [0,0];
    for(let i = 0;i<keyinput.length;i++){
        if(keyinput[i] === "up" && result[1] < ((board[1]-1)/2)){
            result[1] += 1;
        }
        else if(keyinput[i] === "down" && result[1] > -((board[1]-1)/2)){
            result[1] -= 1;
        }
        else if(keyinput[i] === "left" && result[0] > -((board[0]-1)/2)){
            result[0] -= 1;
        }
        else if(keyinput[i] === "right" && result[0] < ((board[0]-1)/2)){
            result[0] += 1;
        }
    }
    return result;
}