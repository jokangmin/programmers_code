function solution(arr, delete_list) {
    return answer = arr.filter(item => !delete_list.includes(item));
}