public void solve(char[][] board) {
        if (board.length > 0) {
            boolean flag = true;
            int row = board.length;
            int col = board[0].length;
            for (int r = 0; r < row; r++) {
                if (board[r][0] == 'O') {
                    board[r][0] = '*';
                }
                if (board[r][col - 1] == 'O') {
                    board[r][col - 1] = '*';
                }
            }
            for (int c = 0; c < col; c++) {
                if (board[0][c] == 'O') {
                    board[0][c] = '*';
                }
                if (board[row - 1][c] == 'O') {
                    board[row - 1][c] = '*';
                }
            }
            while (flag) {
                flag = false;
                for (int r = 1; r < row - 1; r++) {
                    for (int c = 1; c < col - 1; c++) {
                        if (board[r][c] == 'O') {
                            if(board[r-1][c] == '*'
                                    || board[r+1][c] == '*'
                                    || board[r][c-1] == '*'
                                    || board[r][c+1] == '*'){
                                flag = true;
                                board[r][c] = '*';
                            }
                        }
                    }
                }
            }
            for (int r = 1; r < row - 1; r++) {
                for (int c = 1; c < col - 1; c++) {
                    if (board[r][c] == '*') {
                        board[r][c] = 'O';
                    }else{
                        board[r][c] = 'X';
                    }
                }
            }
        }
    }
}