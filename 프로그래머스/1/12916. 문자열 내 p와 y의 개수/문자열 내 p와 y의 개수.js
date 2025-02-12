function solution(s){
    return s.toLowerCase().split("p").length-1 === s.toLowerCase().split("y").length-1 ? true : false ;
}