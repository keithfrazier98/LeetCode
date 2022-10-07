/**
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


Initially looking at this problem it seems you need to find the lowest and highest 
number in the array, but that wont always be true. You could also think that you need 
to find the largest difference of two numbers in an array but that also wont always be true. 

What needs to happen is that given the highest number, find the lowest number that comes before it. 
If there isn't one, find the next highest number and the lowest number that comes before it, and so on. 
But this approach also wouldn't work in a case like this: [7,1,5,3,6,4,0,6]. 

The opposite approach, find the lowest number in the array and the highest number that comes after it
would work in the aformentioned array. It still seems although that finding the greatest difference would
be better. 

You could store two variables, one being the lowest number seen and one being the highest number seen and 
their index. This would also support only traversing the array once. On each iteration, check if the number 
is lower or higher than the current low and high. If it is lower check that the index doesn't come after the 
current high. There could be the case like the following: [2,6,1,7]. In this case, 2 would not be replaced by 
one because 1 comes after six, but then 7 comes meaning the 2 could indeed be replaced by one. This could be 
remedied by keeping reference to the lower variable if one occurs, then if a number higher than the highest 
variable occurs the lower and higher could be set.   
 */

const min = -1;
const max = 10e4 + 1;
const mlength = 10e5 + 1;

const ref = (limit, i) => ({ val: limit, i });

/**
 *
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit0 = function (prices) {
  let low = ref(max, -1);
  let high = ref(min, mlength);
  let lowest = ref(max, -1);
  let highest = ref(min, mlength);

  for (let i = 0; i < prices.length; i++) {
    const val = prices[i];
    const better = { val, i };

    if (val < low.val) {
      if (val < lowest.val) lowest = better;
      if (i < high.i) low = better;
    }

    if (val >= high.val) {
      highest = better;
      if (i > low.i) high = better;
    }

    if (val - lowest.val > high.val - low.val) {
      if (i > lowest.i) {
        high = better;
        highest = better;
      }
    }

    if (lowest.i < highest.i) {
      low = lowest;
      high = highest;
    }
  }
  const profit = high.val - low.val;
  return profit > 0 ? profit : 0;
};

console.log(maxProfit0([7, 1, 5, 3, 6, 4]));
console.log(maxProfit0([7, 6, 4, 3, 1]));
console.log(maxProfit0([2, 1, 2, 1, 0, 1, 2]));
console.log(maxProfit0([3, 3, 5, 0, 0, 3, 1, 4]));
console.log(maxProfit0([4, 7, 1, 2, 11]));

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0,
    min = Infinity;
  for (let price of prices) {
    min = Math.min(min, price);
    profit = Math.max(profit, price - min);
  }
  return profit;
};

/**
 * The above solution is one of the fastest on LC
 *
 * The profit (difference) is initialized, and the min found is set to infinity. 
 * For each number in the array, min is set to the lesser of the current item 
 * or the current min. Then the profit is set to the greater of the profit, or 
 * the current item minus the minimum. 
 */

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
console.log(maxProfit([4, 7, 1, 2, 11]));
