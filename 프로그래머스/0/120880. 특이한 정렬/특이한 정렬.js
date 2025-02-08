function solution(numlist, n) {
    var arr = numlist.map(a => ({ num: a, dif: Math.abs(a - n)}));
    var sort_arr = [...arr].sort((a,b) => a.dif === b.dif ? b.num - a.num : a.dif - b.dif);
    var result = sort_arr.map(a => a.num);
    
    return result;
}