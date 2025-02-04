function solution(array) {
    return array.reduce((total,item) => total + item.toString() ,"").split('').filter(a => a === "7").length;
}