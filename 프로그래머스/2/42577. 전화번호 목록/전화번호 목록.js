function solution(phone_book) {
    phone_book.sort();
    
    for(let i=0;i<phone_book.length-1;i++){
        let hashMap = new Map();
        hashMap.set(phone_book[i+1].slice(0,phone_book[i].length),true);   

        if(hashMap.has(phone_book[i])) return false;
    }
    
    return true;
}