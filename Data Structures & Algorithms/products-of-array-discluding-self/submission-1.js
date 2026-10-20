class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = [1],
            right = [];
        for (let i = 1; i < nums.length; i++) {
            left[i] = left[i - 1] * nums[i - 1];
        }

        let rightP = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            right[i] = rightP;
            rightP *= nums[i];
        }

        const result = [];
        for (let i = 0; i < nums.length; i++) {
            result[i] = right[i] * left[i];
        }
        return result;
    }
}
