function solution(numbers) {
    var arr1 = numbers.filter(a => a >= 0).sort((a,b) => b-a);
    var arr2 = numbers.filter(a => a < 0).sort((a,b) => b-a);
    return numbers.length !== 2 ? (arr1.length > 1 ? (arr2.length > 1 ? arr1[0]*arr1[1] >= arr2[0]*arr2[1] ? arr1[0]*arr1[1] : arr2[0]*arr2[1] : arr1[0]*arr1[1]) : arr2[0]*arr2[1]) : numbers[0]*numbers[1] ;
} 