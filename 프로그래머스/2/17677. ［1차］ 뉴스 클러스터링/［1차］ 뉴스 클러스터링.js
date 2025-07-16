function solution(str1, str2) {
    var answer = 0;
    var arr1 = [];
    var arr2 = [];
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    
    for(let i=0;i<str1.length-1;i++){
        arr1.push(str1[i] + str1[i+1]);
    }
    for(let i=0;i<str2.length-1;i++){
        arr2.push(str2[i] + str2[i+1]);
    }
    
    arr1 = arr1.filter(char => /^[a-zA-Z]+$/.test(char));
    arr2 = arr2.filter(char => /^[a-zA-Z]+$/.test(char));
    
    const map1 = {};
    const map2 = {};

    for (let a of arr1) map1[a] = (map1[a] || 0) + 1;
    for (let a of arr2) map2[a] = (map2[a] || 0) + 1;
    
    let inter = 0;
    let union = 0;
    
    const keys = new Set([...Object.keys(map1), ...Object.keys(map2)]);
    
    for (let key of keys) {
        const count1 = map1[key] || 0;
        const count2 = map2[key] || 0;
        inter += Math.min(count1, count2);
        union += Math.max(count1, count2); 
    }

    if (union === 0) return 65536;
    
    return Math.floor((inter / union) * 65536);
}