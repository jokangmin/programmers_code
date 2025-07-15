function solution(s) {
    var arr1 = s.replace("{{","").replace("}}","").split("},{").sort((a,b) => a.length-b.length);
    var answer = new Set();
    
    for(let i=0;i<arr1.length;i++){
        let index_arr = arr1[i].split(",").map(Number);
        for(let j=0;j<index_arr.length;j++){
            answer.add(index_arr[j]);
        }
    }
    
    return [...answer];
}