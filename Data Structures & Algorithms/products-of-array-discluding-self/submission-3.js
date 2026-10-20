class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result=[1];
        for (let i = 1; i < nums.length; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        let rightP = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= rightP;
            rightP *= nums[i];
        }

        console.log(result);
        return result;
    }
}
