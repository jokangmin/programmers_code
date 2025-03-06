function solution(clothes) {
    var num = 1;
    var category_map = new Map();
    var category_arr = [];
    for(let i=0;i<clothes.length;i++){
        num = 1;
        if(category_map.get(clothes[i][1])){
            num = category_map.get(clothes[i][1]) + 1;
            category_map.set(clothes[i][1],num);
        }else{
            category_map.set(clothes[i][1],num);
            category_arr.push(clothes[i][1]);
        }
    }
    
    return category_arr.reduce((total,a) => (category_map.get(a)+1) * total, 1)-1;
}