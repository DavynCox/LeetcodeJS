/**
 * @param {number[]} prices
 * @return {number[]}
 */

// My O^2 solution
function finalPrices(prices) {
    let newArr = [];
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                newArr.push(prices[i] - prices[j]);
                break;
            } else if (j === prices.length - 1) {
                newArr.push(prices[i])
            }
        }
        if (i === prices.length -1) {
            newArr.push(prices[i])
        }
    }
    return newArr
};

// Simpler implementation by unaisek on LeetCode:
function finalPrices(prices) {
    let answer=[];
    for(let i = 0 ;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            if(prices[j]<=prices[i]){
                // this was his secret sauce, makes it so you only need 2 array manipulations instead of my 3
                prices[i] = prices[i]-prices[j]
                break;
            } 
        }
        answer.push(prices[i]);

    }
    return answer
};