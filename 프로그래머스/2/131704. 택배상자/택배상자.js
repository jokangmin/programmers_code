function solution(order) {
    let answer = 0;
    let subBelt = [];
    let currentBox = 1;
    let i = 0;

    while (true) {
        if (currentBox === order[i]) {
            answer++;
            currentBox++;
            i++;
        } else if (subBelt.length > 0 && subBelt[subBelt.length - 1] === order[i]) {
            subBelt.pop();
            answer++;
            i++;
        } else if (currentBox <= order.length) {
            subBelt.push(currentBox);
            currentBox++;
        } else {
            break;
        }
    }

    return answer;
}
