/**
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character, but a character may map to itself.
 *
 * Example 1:
 *
 * Input: s = "egg", t = "add"
 * Output: true
 *
 * Example 2:
 * Input: s = "foo", t = "bar"
 * Output: false
 *
 * Example 3:
 * Input: s = "paper", t = "title"
 * Output: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let tBuilt = []; // 1
  const sMap = new Map(); // 1

  
  for (let i = 0; i < s.length; i++) { // 1 + 2n
    const char = s[i]; //n
    if (sMap.has(char)) { //n 
      tBuilt[i] = sMap.get(char); //n
    } else if (Array.from(sMap.values()).includes(t[i])) { //n
      return false; // 1
    } else { //n
      sMap.set(char, t[i]); //n
      tBuilt[i] = t[i]; //n 
    }
  }

  return tBuilt.join("") === t; // 1
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("badc", "baba"));

/**
 * Analysis: 4 + 8n 
 * 
 * Time and space complexity: O(n)
 * 
 * solution comparison: https://leetcode.com/problems/isomorphic-strings/submissions/811661502/
 */
