function solution(num_list) {
    return [num_list.filter(a => a % 2 === 0).length,num_list.filter(a => a % 2 !== 0).length];
}