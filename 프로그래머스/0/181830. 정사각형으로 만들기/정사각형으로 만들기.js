function solution(arr) {
    if (!arr.length || !arr[0].length) return arr;

    const rowCount = arr.length;
    const colCount = arr[0].length;

    if (rowCount === colCount) {
        return arr;
    }

    if (rowCount < colCount) {
        for (let i = rowCount; i < colCount; i++) {
            arr.push(new Array(colCount).fill(0));
        }
        return arr;
    }

    if (rowCount > colCount) {
        for (let i = 0; i < rowCount; i++) {
            while (arr[i].length < rowCount) {
                arr[i].push(0);
            }
        }
        return arr;
    }
}
