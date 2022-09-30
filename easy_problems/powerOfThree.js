/**
 * Given an integer n, return true if it is a power of three. Otherwise, return false.
 * An integer n is a power of three, if there exists an integer x such that n == 3x.
 *
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 1) return true;
  if (n < 0) return false;
  return !!(3 ** 20 % n === 0);
};

console.log(isPowerOfThree(27));
