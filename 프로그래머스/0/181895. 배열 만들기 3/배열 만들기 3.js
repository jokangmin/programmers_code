function solution(arr, intervals) {
    var answer = Array(20);
    var answer1 = Array(20);
    var answer2 = Array(20);
    answer1 = arr.slice(intervals[0][0],intervals[0][1]+1);
    answer2 = arr.slice(intervals[1][0],intervals[1][1]+1);
    answer = answer1.concat(answer2);
    return answer;
}