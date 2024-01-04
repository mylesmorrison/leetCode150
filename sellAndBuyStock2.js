/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            profit += (prices[i] - prices[i-1]);
        } 
    }
    return profit;
};

prices = [7,1,5,3,6,4];
maxProfit(prices);



/* this is just finding the min and then the max price after that
var maxProfit = function(prices) {
    console.log(prices);
    let min = prices[0];
    let max = 0;
    let minIndex;
    let maxIndex;
    //get the min
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            minIndex = i;
        }
    }
    //console.log(min);
    // get the max after 
    for (let i = minIndex; i<prices.length; i++) {
        if (prices[i] > max) {
            max = prices[i]
        } 
        
    }
    console.log(max - min);

};

prices = [7,1,5,3,6,4];
maxProfit(prices);
*/