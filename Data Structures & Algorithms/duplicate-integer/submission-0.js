class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for (let num of nums) {
            if (!seen.has(num)) {
                seen.add(num);
            } else {
                return true;
            }
        }
        return false;
    }
}
