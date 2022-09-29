/**
 * Given an array of integers nums, calculate the pivot index of this array.
 *
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 *
 * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
 *
 * Return the leftmost pivot index. If no such index exists, return -1.
 *
 * Example 1:
 * Input: nums = [1,7,3,6,5,6]
 * Output: 3
 * Explanation:
 * The pivot index is 3.
 * Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
 * Right sum = nums[4] + nums[5] = 5 + 6 = 11
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const total = nums.reduce((a, b) => a + b);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - leftSum - nums[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
};

console.log(pivotIndex([1, 1, 1, 1, 1])); // => 2
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // => 3
console.log(pivotIndex([2, 1, -1])); // => 0

/**
 * Analysis by line : f(n) = 4 + 5n + n
 * 
 * Big O = O(n)
 * 
 * Even though there are two parts of this function that iterate 
 * n possibly entirely, the order of growth is still ultimately O(n). 
 * 
 * This is not quadratic because n there is not a nested loop. 
 * 
 * 
 * This solution could potentially be improved to one iteration, by using i to 
 * traverse the array on both ends at the same time 
 * 
 * current solution analysis: https://leetcode.com/problems/running-sum-of-1d-array/submissions/811582274/
 */
