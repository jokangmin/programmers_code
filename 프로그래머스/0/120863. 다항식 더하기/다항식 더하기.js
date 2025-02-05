function solution(polynomial) {
    var x_val = polynomial.split(' + ').filter(a => a.includes("x"));
    var num = polynomial.split(' + ').filter(a => !a.includes("x"));
    
    var x_num = x_val.map(a => a === "x" ? 1 : Number(a.replace("x", ""))).reduce((total,a) => total + a,0);
    var num_sum = num.reduce((total,a) => total + Number(a),0);
    
    let result = [];
    if (x_num !== 0) result.push(x_num === 1 ? "x" : x_num + "x");
    if (num_sum !== 0) result.push(num_sum);

    return result.join(" + ");
}