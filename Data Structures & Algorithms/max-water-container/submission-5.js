class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let end = heights.length - 1;
        let start = 0;
        let maxArea = 0;
        while (start < end) {
            let area = (end - start) * Math.min(heights[start], heights[end]);
            maxArea = Math.max(maxArea, area);
            if (heights[start] < heights[end]) start++;
            else end--;
        }
        return maxArea;
    }
}
