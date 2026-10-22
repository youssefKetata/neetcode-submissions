class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    // isValidSudoku(board) {}

    isValidSudoku = function (board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];

                if (val === ".") continue;

                const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (rows[r].has(val) || cols[c].has(val) || boxes[box].has(val)) {
                    return false;
                }

                rows[r].add(val);
                cols[c].add(val);
                boxes[box].add(val);
            }
        }

        return true;
    };
}
// Math.floor(row/3)*3 + Math.floor(j/3)
// row0
// 0 to 2 grid0
// 3-5 grid1
// 6-8 grid2
// row1
// 0 to 2 grid0
// 3-5 grid1
// 6-8 grid2
// row2
// 0 to 2 grid0
// 3-5 grid1
// 6-8 grid2
// row3
// 0 to 2 grid3
// 3-5 grid3
// 6-8 grid5
