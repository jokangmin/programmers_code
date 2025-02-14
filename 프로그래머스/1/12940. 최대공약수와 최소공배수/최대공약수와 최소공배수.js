function solution(n, m) {
    let gcd = 1;
    let lcm = 1;

    for(let i=2; i<=Math.min(n, m); i++){
        if(n % i === 0 && m % i === 0){
            gcd = i;
        }
    }
    
    while(true){
      if(lcm % n === 0 && lcm % m === 0){
        break;
      }
      lcm++;
    }

    return [gcd,lcm];
    
}