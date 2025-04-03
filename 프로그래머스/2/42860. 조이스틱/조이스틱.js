function solution(name) {
    var count = 0;
    var length = name.length;  
    var move = length - 1;

    for (let i=0;i<length;i++) {
        let charCode = name.charCodeAt(i) - 65;
        count += Math.min(charCode, 26 - charCode);

        let next_index = i + 1;
        while (next_index < length && name[next_index] === 'A') {
            next_index++;
        }

        move = Math.min(move, 2 * i + length - next_index, i + 2 * (length - next_index));
    }

    return count + move;
}
