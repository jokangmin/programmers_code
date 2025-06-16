function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    // OR 연산 후 이진수 문자열로 변환
    let binary = (arr1[i] | arr2[i]).toString(2);
    // 앞자리 0 채워서 n자리 만들기
    binary = binary.padStart(n, '0');
    // 1 => '#', 0 => ' ' 으로 치환
    const line = binary.replace(/1/g, '#').replace(/0/g, ' ');
    answer.push(line);
  }

  return answer;
}
