class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 2) return 0;

        let cheapestPrice = prices[0];
        let bestProfit = 0;

        for (let day = 1; day < prices.length; day++) {
            const profitIfSoldToday = prices[day] - cheapestPrice;
            bestProfit = Math.max(bestProfit, profitIfSoldToday);

            cheapestPrice = Math.min(cheapestPrice, prices[day]);
        }

        return bestProfit;
    }
}
