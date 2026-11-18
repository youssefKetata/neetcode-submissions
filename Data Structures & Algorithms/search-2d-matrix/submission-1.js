class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;
        let right = matrix.length - 1;
        // [[1]] 2

        while (left <= right) {
            let mid = Math.floor((right + left) / 2);
            if (matrix[mid][matrix[mid].length - 1] === target) return true;
            if (matrix[mid][matrix[mid].length - 1] > target) right = mid;
            if (matrix[mid][matrix[mid].length - 1] < target) left = mid + 1;
            if (left === right) {
                let l = 0;
                let r = matrix[right].length - 1;
                while (l <= r) {
                    let mid = Math.floor((r + l) / 2);
                    if (matrix[right][mid] === target) return true;
                    if (matrix[right][mid] < target) l = mid + 1;
                    if (matrix[right][mid] > target) r = mid - 1;
                }
                return false;
            }
        }
        return false;
    }
}
