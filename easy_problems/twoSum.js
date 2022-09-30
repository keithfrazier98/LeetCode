/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let solution = [];

  for (let i = 0; i < nums.length; i++) {
    if (solution[1]) continue;
    const currNum = nums[i];
    solution.push(i);

    for (let i2 = 0; i2 < nums.length; i2++) {
      if (i === i2 || solution[1]) continue;

      const currNum2 = nums[i2];
      if (currNum + currNum2 === target) {
        solution.push(i2);
      }
    }

    if (!solution[1]) solution = [];
  }
  return solution;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
