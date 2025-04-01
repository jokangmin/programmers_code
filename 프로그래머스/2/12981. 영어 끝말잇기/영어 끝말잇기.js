function solution(n, words) {
    var count = 1;
    var word_index = 0;
    var toggle = false;
    var num_arr = [];
    var word = "";

    while (words.length > 0) {
        for (let i = 0; i < n; i++) {
            let before_word = word;
            word = words.shift();

            if (!word) {
                toggle = true;
                word_index = i + 1;
                break;
            }

            if (num_arr.includes(word) || (before_word && before_word.slice(-1) !== word[0])) {
                word_index = i + 1;
                toggle = true;
                break;
            } else {
                num_arr.push(word);
            }
        }

        if (toggle) break;

        count++;
    }

    return toggle ? [word_index, count] : [0, 0];;
}
