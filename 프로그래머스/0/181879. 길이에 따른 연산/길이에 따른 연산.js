function solution(num_list) {
    if(num_list.length <= 10) return answer = num_list.reduce((gob,i) => gob * i,1);
    if(num_list.length >= 11) return answer = num_list.reduce((gob,i) => gob + i,0);
}