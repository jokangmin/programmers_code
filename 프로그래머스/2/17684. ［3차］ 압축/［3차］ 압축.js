function solution(msg) {
  // 1. A~Z 사전 초기화
  const dictionary = {};
  for (let i = 0; i < 26; i++) {
    dictionary[String.fromCharCode(65 + i)] = i + 1; // A~Z → 1~26
  }

  let nextIndex = 27;
  const result = [];
  let i = 0;

  while (i < msg.length) {
    let w = msg[i];
    let j = i + 1;

    // w + 다음 글자가 사전에 있는 동안 계속 늘려간다
    while (j <= msg.length && dictionary[msg.slice(i, j)]) {
      w = msg.slice(i, j);
      j++;
    }

    result.push(dictionary[w]); // w의 색인 번호 출력

    if (j <= msg.length) {
      const newWord = msg.slice(i, j);
      dictionary[newWord] = nextIndex++;
    }

    i += w.length; // w만큼 이동
  }

  return result;
}
