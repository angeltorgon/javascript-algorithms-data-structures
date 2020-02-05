/*
 *
 *  -----------------
 * |  MARK AND TOYS  |
 *  -----------------
 *
 *
 * Mark and Jane are very happy after having their first child. 
 * Their son loves toys, so Mark wants to buy some. 
 * There are a number of different toys lying in front of him, 
 * tagged with their prices. Mark has only a certain amount 
 * to spend, and he wants to maximize the number of toys 
 * he buys with this money.
 *
 * Given a list of prices and an amount to spend, 
 * what is the maximum number of toys Mark can buy?
 *
 *
 *
 * e.g.
 *
 * prices = [1, 2, 3, 4] // prices of toys
 * k = 7 // amount of dollars he can spend
 *
 * maximumToys(prices, k) // he can buy [1,2,3] for 6
 *
 * 
 * Complete the function maximumToys in the editor below. 
 * It should return an integer representing the maximum 
 * number of toys Mark can purchase.
 *
 * MAXIMUMTOYS HAS THE FOLLOWING PARAMETER(S):
 *
 * prices: an array of integers representing toy prices
 * k: an integer, Mark's budget
 *
 *
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */

function maximumToys(prices, k) {
    let counter = 0;
    prices.sort();
    console.log("prices -- ", prices);

    let totalCost = 0;
    let index = 0;

    while(prices[index] + totalCost <= k){
        totalCost += prices[index];
        counter ++;
        index ++;
    };

    return counter;


};



/*
 *
 * ***** TESTS
 *
 * */

const prices1 = [4,3,2,1]
const k1 = 7

console.log("## TEST 1 ----- > ", maximumToys(prices1, k1)); // 3

const prices2 = [4,60,5,2,1]
const k2 = 12
console.log("## TEST 2 ----- > ", maximumToys(prices2, k2)); // 4

// console.log("## TEST 3 ----- > ", maximumToys(prices, k)); // 128

