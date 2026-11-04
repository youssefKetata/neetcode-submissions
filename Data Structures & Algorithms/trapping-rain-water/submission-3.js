class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxmin = Array.from({ length: height.length }, () =>
            Array.from({ length: 2 }, () => 0),
        );

        let maxL = 0;
        for (let i = 0; i < height.length; i++) {
            maxL = Math.max(maxL, height[i]);
            maxmin[i][0] = maxL;
        }
        let maxR = 0;
        for (let i = height.length - 1; i >= 0; i--) {
            maxR = Math.max(maxR, height[i]);
            maxmin[i][1] = maxR;
        }
        let total = 0;
        for (let i = 0; i < height.length; i++) {
            let area = Math.min(maxmin[i][0], maxmin[i][1]) - height[i];
            total += area;
        }

        return total;
    }
}
