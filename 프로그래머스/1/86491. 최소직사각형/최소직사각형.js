function solution(sizes) {
    var max_arr = [];
    var min_arr = [];
    for(let i=0;i<sizes.length;i++){
        max_arr.push(Math.max(...sizes[i]));
        min_arr.push(Math.min(...sizes[i]));
    }
    return Math.max(...max_arr)*Math.max(...min_arr);
}