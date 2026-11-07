class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // the first thnikingis usign set or map to keep track of chars, and using two pointers
        let unique = new Set();
        let end = 0;
        let start = 0;
        let output = 0;
        while (end < s.length) {
            if (!unique.has(s[end])) {
                unique.add(s[end]);
                end++;
                output = Math.max(output, end - start);
            } else {
                unique.delete(s[start]);
                start++;
            }
        }
        // zyxyFF
        return output;
    }
}
