/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 *
 * Example 2:
 * Input: nums = [1,1,1,1,1]
 * Output: [1,2,3,4,5]
 * Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
 *
 * Example 3:
 * Input: nums = [3,1,2,10,1]
 * Output: [3,4,6,16,17]
 *
 */

function runningSum(numArr) {
  const response = [];
  numArr.forEach((num, i) => {
    let lastSum = response[i - 1];
    if (isNaN(lastSum)) lastSum = 0;
    response.push(lastSum + num);
  });
  return response;
}

console.log(runningSum([1, 2, 3, 4])); // => [ 1, 3, 6, 10 ]
console.log(runningSum([1, 1, 1, 1, 1])); // => [ 1, 2, 3, 4, 5 ]
console.log(runningSum([3, 1, 2, 10, 1])); // => [ 3, 4, 6, 16, 17 ]

/**
 * Asymptotic Analysis by line
 * 
 *  23 x1
 *  24 - 27 x(n)
 *  29 x1
 * 
 *  Strict Analysis = 4n + 2
 * 
 *  O notation = 0(n)
 *
 */
