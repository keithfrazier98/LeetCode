/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const key = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let count = 0;
  const length = s.length;
  let skip = false;
  for (let i = 0; i < length; i++) {

    if (skip) {
      skip = false;
      continue;
    }

    const letter = s[i];
    const currentNum = key[letter];
    let numToAdd = currentNum;

    if (i !== length - 1) {
      const nextLetter = s[i + 1];
      const nextNum = key[nextLetter];
      if (currentNum < nextNum) {
        numToAdd = nextNum - currentNum;
        skip = true;
      }
    }
    
    count += numToAdd;
  }

  return count;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
