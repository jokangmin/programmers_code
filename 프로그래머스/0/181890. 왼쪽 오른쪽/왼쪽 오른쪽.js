function solution(str_list) {
    var answer = [];
    var toggle1 = false;
    var toggle2 = false;
    
    for(let i = 0;i<str_list.length;i++){
        if(str_list[i] == "l" && toggle1 == false){
            return answer = str_list.slice(0,i);
        }
        if(str_list[i] == "r" && toggle2 == false){
            return answer = str_list.slice(i+1);
        }
    }
    
    return [];
}