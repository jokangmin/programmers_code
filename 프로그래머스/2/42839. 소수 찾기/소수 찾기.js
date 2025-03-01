function solution(numbers) {
    let answer = new Set();
    let numArr = numbers.split("");

    // 순열을 생성하는 함수
    function getPermutations(arr, fixed) {
        if (arr.length) {
            for (let i = 0; i < arr.length; i++) {
                let newNum = fixed + arr[i];
                if (isPrime(Number(newNum))) {
                    answer.add(Number(newNum));
                }
                let tempArr = [...arr];
                tempArr.splice(i, 1);
                getPermutations(tempArr, newNum);
            }
        }
    }

    // 소수 판별 함수
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // 순열 생성 시작
    getPermutations(numArr, "");

    return answer.size;
}
