function solution(score) {
    var avg = score.map(s => (s[0] + s[1]) / 2);
    var sort_arr = [...avg].sort((a, b) => b - a);
    var rank = [];
    
    for(let j = 0;j<sort_arr.length;j++){
        if(sort_arr[j] === sort_arr[j-1]){
           rank[j] = rank[j-1];
        }else{
           rank[j] = j+1; 
        }
    }
    
    
    return avg.map(a => rank[sort_arr.indexOf(a)]);
}