class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 2) return 0;
        let b = 0;
        let s = 1;
        let r = 0;
        while (s < prices.length) {
            let revenue = prices[s] - prices[b];
            if (revenue < 0) {
                b = s;
                s++;
            } else {
                r = Math.max(r, revenue);
                s++;
            }
        }
        return r;
    }
}
