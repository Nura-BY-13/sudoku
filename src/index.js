module.exports = function solveSudoku(matrix) {
    // your solution

    let All = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function Sudoku(i, j) {
        let matrixMaybe = [];
        for (let jj = 0; jj < 9; jj++) {
            if (matrix[i][jj] != 0) {
                matrixMaybe.push(matrix[i][jj]);
            }
        }
        for (let ii = 0; ii < 9; ii++) {
            if ((matrix[ii][j] != 0) && (matrixMaybe.indexOf(matrix[ii][j]) == -1)) {
                matrixMaybe.push(matrix[ii][j]);
            }
        }


        // sq//
        if ((Math.floor(i / 3) == 0) && (Math.floor(j / 3) == 0)) {
            for (let iii = 0; iii < 3; iii++) {
                for (let jjj = 0; jjj < 3; jjj++) {
                    if ((matrix[iii][jjj] != 0) && (matrixMaybe.indexOf(matrix[iii][jjj]) == -1)) {
                        matrixMaybe.push(matrix[iii][jjj]);
                    }
                }
            }
        }
        if ((Math.floor(i / 3) == 0) && (Math.floor(j / 3) == 1)) {
            for (let iii = 0; iii < 3; iii++) {
                for (let jjj = 3; jjj < 6; jjj++) {
                    if ((matrix[iii][jjj] != 0) && (matrixMaybe.indexOf(matrix[iii][jjj]) == -1)) {
                        matrixMaybe.push(matrix[iii][jjj]);
                    }
                }
            }
        }
        if ((Math.floor(i / 3) == 0) && (Math.floor(j / 3) == 2)) {
            for (let iii = 0; iii < 3; iii++) {
                for (let jjj = 6; jjj < 9; jjj++) {
                    if ((matrix[iii][jjj] != 0) && (matrixMaybe.indexOf(matrix[iii][jjj]) == -1)) {
                        matrixMaybe.push(matrix[iii][jjj]);
                    }
                }
            }
        }
        if ((Math.floor(i / 3) == 1) && (Math.floor(j / 3) == 0)) {
            for (let iii = 3; iii < 6; iii++) {
                for (let jjj = 0; jjj < 3; jjj++) {
                    if ((matrix[iii][jjj] != 0) && (matrixMaybe.indexOf(matrix[iii][jjj]) == -1)) {
                        matrixMaybe.push(matrix[iii][jjj]);
                    }
                }
            }
        }
        if ((Math.floor(i / 3) == 1) && (Math.floor(j / 3) == 1)) {
            for (let iii = 3; iii < 6; iii++) {
                for (let jjj = 3; jjj < 6; jjj++) {
                    if ((matrix[iii][jjj] != 0) && (matrixMaybe.indexOf(matrix[iii][jjj]) == -1)) {
                        matrixMaybe.push(matrix[iii][jjj]);
                    }
                }
            }
        }
        if ((Math.floor(i / 3) == 1) && (Math.floor(j / 3) == 2)) {
            for (let iii = 3; iii < 6; iii++) {
                for (let jjj = 6; jjj < 9; jjj++) {
                    if ((matrix[iii][jjj] != 0) && (matrixMaybe.indexOf(matrix[iii][jjj]) == -1)) {
                        matrixMaybe.push(matrix[iii][jjj]);
                    }
                }
            }
        }

        if ((Math.floor(i / 3) == 2) && (Math.floor(j / 3) == 0)) {
            for (let iii = 6; iii < 9; iii++) {
                for (let jjj = 0; jjj < 3; jjj++) {
                    if ((matrix[iii][jjj] != 0) && (matrixMaybe.indexOf(matrix[iii][jjj]) == -1)) {
                        matrixMaybe.push(matrix[iii][jjj]);
                    }
                }
            }
        }
        if ((Math.floor(i / 3) == 2) && (Math.floor(j / 3) == 1)) {
            for (let iii = 6; iii < 9; iii++) {
                for (let jjj = 3; jjj < 6; jjj++) {
                    if ((matrix[iii][jjj] != 0) && (matrixMaybe.indexOf(matrix[iii][jjj]) == -1)) {
                        matrixMaybe.push(matrix[iii][jjj]);
                    }
                }
            }
        }
        if ((Math.floor(i / 3) == 2) && (Math.floor(j / 3) == 2)) {
            for (let iii = 6; iii < 9; iii++) {
                for (let jjj = 6; jjj < 9; jjj++) {
                    if ((matrix[iii][jjj] != 0) && (matrixMaybe.indexOf(matrix[iii][jjj]) == -1)) {
                        matrixMaybe.push(matrix[iii][jjj]);
                    }
                }
            }
        }
        let diff = All.filter(x => matrixMaybe.indexOf(x) == -1);
        if (diff.length == 1) {
            matrix[i][j] = diff[0];
        }
        else {
            matrix[i][j] = diff;
        }
    }


    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (matrix[i][j] == 0) {
                Sudoku(i, j);
            }
        }
    }
    return matrix;
}
