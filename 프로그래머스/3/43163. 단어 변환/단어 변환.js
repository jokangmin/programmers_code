function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    
    var answer = 0;
    
    let queue = [[begin,0]];
    let visited = [];
    
    while(queue.length){
        let [str, count] = queue.shift();
        
        if(str === target) return count;
        
        for(let i=0;i<words.length;i++){
            let isEqul = false;
            
            for(let j=0;j<begin.length;j++){
                let str_copy = str.split('');
                str_copy[j] = words[i][j];
                str_copy = str_copy.join('');

                if(words[i] === str_copy){
                    isEqul = true;
                    break;
                }
            }
        
            if(!visited.includes(words[i]) && isEqul){
                visited.push(words[i]);
                queue.push([words[i], count+1]);
            }
        }
    }
    
    
    return 0;
}