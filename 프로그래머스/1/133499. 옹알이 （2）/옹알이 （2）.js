function solution(babbling) {
    const canSay = ["aya", "ye", "woo", "ma"];
    let count = 0;

    for (let word of babbling) {
        let isValid = true;

        for (let say of canSay) {
            if (word.includes(say + say)) {
                isValid = false;
                break;
            }
        }

        if (!isValid) continue;

        for (let say of canSay) {
            word = word.replaceAll(say, " ");
        }

        if (word.trim() === "") count++;
    }

    return count;
}
