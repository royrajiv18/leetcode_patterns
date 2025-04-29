/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a 
different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5 // 6-1
Input: prices = [7,6,4,3,1]
Output: 0 // no case
*/
/*
Input: prices = [7,1,5,3,6,4]
Output: 5 // 6-1
Input: prices = [7,6,4,3,1]
Output: 0 // no case
*/
const prices = [7,1,5,3,6,4];

const maxProfit = (prices)=> {
    let currProfit = 0
    let minPrice = Infinity
    for (let price of prices){
        if(price < minPrice){
            minPrice = price // 1
        }
        else{
            currProfit=Math.max(currProfit, price-minPrice)
        }
    }
    return currProfit
}
console.log(maxProfit(prices)) // 5



