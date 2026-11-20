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
                if (e < mid) {
                    l++;
                } else {
                    l += Math.ceil(e / mid);
                }
            }
            if (l <= h) {
                out = Math.min(mid, out);
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            console.log(mid, l, out, Math.min(out, mid));
            // if ch biger then h, increase mid , left=mid+1
            // if good, tr to find smlaer, so decrese right mid-1;
        }
        return out;
    }
}
