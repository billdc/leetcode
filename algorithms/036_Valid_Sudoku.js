var isValidSudoku = function(board) {
    var vMap, hMap, i, j, n, m;
    for (i = 0; i < 9; i++) {
        vMap = {};
        hMap = {};
        for (j = 0; j < 9; j++) {
            if (board[i][j] != ".") {
                if (hMap[board[i][j]] === undefined) {
                    hMap[board[i][j]] = 1;
                } else {
                    return false;
                }
            }
            if (board[j][i] != ".") {
                if (vMap[board[j][i]] === undefined) {
                    vMap[board[j][i]] = 1;
                } else {
                    return false;
                }
            }
        }
    }
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            hMap = {};
            for (n = 0; n < 3; n++) {
                for (m = 0; m < 3; m++) {
                    if (board[3 * i + n][3 * j + m] != ".") {
                        if (hMap[board[3 * i + n][3 * j + m]] === undefined) {
                            hMap[board[3 * i + n][3 * j + m]] = 1;
                        } else {
                            return false;
                        }
                    }
                }
            }
        }
    }
    return true;
};
