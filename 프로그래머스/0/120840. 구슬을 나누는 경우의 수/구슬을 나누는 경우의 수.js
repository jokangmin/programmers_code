function solution(balls, share) {
    var answer = 0;
    var denom = 1;
    var numer = 1;

    for(let i = share+1;i<=balls;i++){
        denom = denom * i;
    }
    for(let i = 1;i<=(balls - share);i++){
        numer = numer * i;
    }

    return Math.floor(denom / numer);
}