function solution(babbling) {
    var answer = 0;
    var ong = ["aya", "ye", "woo", "ma"];
    
    for (let i = 0; i < babbling.length;i++) {
        let valid = true;
        
        while (valid) {
            valid = false;
            for (let j = 0; j < ong.length;j++) {
                if (babbling[i].startsWith(ong[j])) {
                    babbling[i] = babbling[i].slice(ong[j].length);
                    valid = true;
                    break;
                }
            }
        }
        
        if (babbling[i] === "") {
            answer++;
        }
    }
    return answer;
}
