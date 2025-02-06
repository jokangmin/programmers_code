function solution(chicken) {
    var totalService = 0;
    var coupons = chicken;
    while (coupons >= 10) {
        var newService = Math.floor(coupons / 10);
        totalService += newService;
        coupons = (coupons % 10) + newService;
    }
    return totalService;
}