class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for (let num of nums) {
            if (freq.has(num)) {
                freq.set(num, freq.get(num) + 1);
            } else {
                freq.set(num, 1);
            }
        }
        return [...freq.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map((e) => e[0]);
    }
}
