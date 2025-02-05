function solution(spell, dic) {
    var answer = 0;
    var include_number = 0;
    for(let i = 0;i<dic.length;i++){
        for(let j = 0;j<spell.length;j++){
            if(dic[i].includes(spell[j])){
                include_number++;
            }
        }
        if(include_number === spell.length){
            return 1;
        }else{
            include_number = 0;
        }
    }
    return 2;
}