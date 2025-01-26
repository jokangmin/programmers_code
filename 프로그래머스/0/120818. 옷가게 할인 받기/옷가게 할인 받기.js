function solution(price) {
    if (price >= 500000) {
        return price - Math.ceil(price * 20 / 100);
    } else if (price >= 300000) {
        return price - Math.ceil(price * 10 / 100);
    } else if (price >= 100000) {
        return price - Math.ceil(price * 5 / 100);
    } else {
        return price;
    }
}
