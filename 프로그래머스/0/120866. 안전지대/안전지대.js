function solution(board) {
    let n = board.length;
    
    for(let i = 0; i < n;i++) {
        for(let j = 0; j < n;j++) {
            if(board[i][j] === 1) {
                for(let a = i - 1; a <= i + 1;a++) {
                    for(let b = j - 1; b <= j + 1;b++) {
                        if (a >= 0 && a < n && b >= 0 && b < n && board[i][j] !== board[a][b]) {
                            board[a][b] = 2;
                        }
                    }
                }
            }
        }
    }
    var num = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n;j++) {
            if(board[i][j] === 0){
                num++;
            }
        }
    }
    return num;
}
