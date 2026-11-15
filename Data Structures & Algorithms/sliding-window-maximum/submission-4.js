class Solution {
    maxSlidingWindow(nums, k) {
        const deque = [];
        const output = [];
        let head = 0;                                  // deque[head..end] is the "real" deque

        for (let i = 0; i < nums.length; i++) {
            // front expired? "remove" it by moving head forward
            if (i >= k && deque[head] === nums[i - k]) head++;

            // remove smaller values from the back, but never go past head
            while (deque.length > head && deque[deque.length - 1] < nums[i]) {
                deque.pop();
            }

            deque.push(nums[i]);

            if (i + 1 >= k) output.push(deque[head]);  // front is deque[head], not deque[0]
        }
        return output;
    }
}