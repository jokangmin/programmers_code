function solution(elements) {
    var answer = new Set();
    var two_elements = elements.concat(elements);
    
    for(let i=1;i<=elements.length;i++){
        for(let j=0;j<=two_elements.length-i;j++){
            let sum = 0;
            for(let a=j;a<j+i;a++){
                sum += two_elements[a];
            }
            answer.add(sum);
        }
    }
    
    return answer.size;
}