/**
 ** @param {string} s
 ** @param {number} numRows
 ** @return {string}
 **/

var convert = function(s, numRows) {
    var index = 0;
    var matrix = [];
    var r, c, start;
    var res = "";
    for (r = 0; r < numRows; r++) {
        matrix[r] = [];
    }

    c = 0;
    while (index < s.length) {
        if (c % 2 == 0) {
            for (r = 0; r < numRows; r++) {
                matrix[r][c] = s[index];
                index++;
            }
        } else {
            for (r = numRows - 2; r > 0; r--) {
                matrix[r][c] = s[index];
                index++;
            }
        }
        c++;
    }

    for (r = 0; r < numRows; r++) {
        for (c in matrix[r]) {
            if (matrix[r][c] !== undefined) {
                res = res + matrix[r][c];
            }
        }
    }
    console.log(matrix);
    console.log(res);
    return res;
};

convert("", 1);
convert("ABC", 2);
convert("ABCD", 3);
convert("PAYPALISHIRING", 3);
