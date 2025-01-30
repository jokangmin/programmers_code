function solution(order) {
    return order.toString().split('').filter(a => Number(a) % 3 === 0 && a !== '0').length;
}
