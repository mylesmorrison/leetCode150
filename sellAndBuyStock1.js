/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    if (n <= 1) {
        return 0;
    }
    let maxProfit = 0;
    let low = prices[0];
    for (let i = 1; i < n; i++) {
        low = Math.min(low, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i]-low);
    }
    return maxProfit;
};

prices = [7,1,5,3,6,4];

console.log(maxProfit(prices));
