function solution(word) {
    var word_arr = ['A','E','I','O','U'];
    var word_now = ['A'];
    var answer = 0;

    while(true){
        answer++;
        if (word_now.join('') === word) return answer;
        
        if (word_now.length < 5) {
            word_now.push('A');
            continue;
        }
        
        
        while (word_now.length > 0) {
            let index = word_arr.indexOf(word_now[word_now.length - 1]);

            if (index < 4) {
                word_now[word_now.length - 1] = word_arr[index + 1];
                break;
            } else {
                word_now.pop();
            }
        }
    }
    
    return answer;
}