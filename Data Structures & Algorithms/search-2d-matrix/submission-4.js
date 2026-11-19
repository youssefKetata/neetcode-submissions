class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix[0]) return false;
        let n = matrix.length;
        let m = matrix[0].length;
        let left = 0;
        let right = n * m - 1;
        while (left <= right) {
            let mid = Math.floor((right + left) / 2);
            let r = Math.trunc(mid / m);
            let c = mid % m;
            console.log(matrix[r][c]);

            if (matrix[r][c] === target) return true;
            if (matrix[r][c] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }
}
