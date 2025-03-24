function solution(cards1, cards2, goal) {
    let i = 0; // cards1의 인덱스
    let j = 0; // cards2의 인덱스

    for (let word of goal) {
        // goal의 단어가 cards1의 현재 단어와 일치하면 cards1에서 하나씩 진행
        if (i < cards1.length && cards1[i] === word) {
            i++;
        }
        // goal의 단어가 cards2의 현재 단어와 일치하면 cards2에서 하나씩 진행
        else if (j < cards2.length && cards2[j] === word) {
            j++;
        }
        // goal의 단어가 둘 중 하나에도 일치하지 않으면 불가능
        else {
            return "No";
        }
    }

    return "Yes";
}
