function solution(array) {
    var answer = 0;
    var arr = new Array(Math.max(...array) + 1).fill(0);
    if(array.length === 1){
        return array[0];
    }
    for(let i=0;i<array.length;i++){
        var index = array[i];
        arr[index] = arr[index] + 1;
    }
    let maxFreq = Math.max(...arr);
    let maxIndices = arr.map((freq, index) => (freq === maxFreq ? index : null)).filter(index => index !== null);

    if (maxIndices.length > 1) return -1;
    return maxIndices[0];

}