function solution(quiz) {
    var answer = [];
    var arr = [];
    var arr2 = [];
    for(let i =0;i<quiz.length;i++){
        arr = quiz[i].split(' = ');
        arr2 = arr[0].split(' ');
        if(arr2[1] === "+"){
            if((Number(arr2[0]) + Number(arr2[2])) === Number(arr[1])){
                answer[i] = "O";
            }else if((Number(arr2[0]) + Number(arr2[2])) !== Number(arr[1])){
                answer[i] = "X";
            }
        }else if(arr2[1] === "-"){
            if((Number(arr2[0]) - Number(arr2[2])) === Number(arr[1])){
                answer[i] = "O";
            }else if((Number(arr2[0]) - Number(arr2[2])) !== Number(arr[1])){
                answer[i] = "X";
            }
        }
    }
    return answer;
}