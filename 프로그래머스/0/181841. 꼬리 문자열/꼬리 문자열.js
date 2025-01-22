function solution(str_list, ex) {
    answer = str_list.filter(item => !item.includes(ex)).join('');
    return answer;
}