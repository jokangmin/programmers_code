function solution(array, n) {
    var answer = array[0];
    var minDiff = Math.abs(array[0] - n);

    for (let i = 1;i < array.length;i++) {
        let diff = Math.abs(array[i] - n);
        if (diff < minDiff || (diff === minDiff && array[i] < answer)) {
            answer = array[i];
            minDiff = diff;
        }
    }
    return answer;
}
