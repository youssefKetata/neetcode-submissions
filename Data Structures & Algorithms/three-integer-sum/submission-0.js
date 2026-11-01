class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // a=-c-b
        nums.sort((a, b) => a - b);
        // [ -4, -1, -1, 0, 1, 2 ]
        let bingo = [];
        let bingos = new Set();
        for (let i = 0; i < nums.length; i++) {
            let target = -nums[i];
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                let sum = nums[right] + nums[left];
                if (sum == target) {
                    let b = [nums[i], nums[left], nums[right]];
                    let key = b.join(",");
                    if (!bingos.has(key)) {
                        bingo.push(b);
                        bingos.add(key);
                    }
                    left++;
                    continue;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        console.log(bingo);
        return bingo;
    }
}
