function solution(cipher, code) {
    var str = '';
    for (let i = code - 1; i < cipher.length; i += code) {
        str += cipher[i];
    }
    return str;
}