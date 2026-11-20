class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let out = Infinity;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let l = 0;
            for (const e of piles) {
                l += Math.ceil(e / mid);
            }
            if (l <= h) {
                out = Math.min(mid, out);
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return out;
    }
}
