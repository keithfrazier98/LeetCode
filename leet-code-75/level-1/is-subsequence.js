/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string by
 * deleting some (can be none) of the characters without disturbing the relative positions
 * of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * Example 1:
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 *
 * Example 2:
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let pointerA = 0; //1
  let pointerB = 1; //1
  let isSub = true; //1

  if (!s && t) return true; //1
  if (s && !t) return false; //1
  if (!s && !t) return true; //1

  if (s.length === 1 && t.length === 1) {
    //1
    if (s[0] !== t[0]) return false; //1
  }

  for (let i = 0; i < t.length; i++) {
    // 1 + 2n
    const sub = t[i]; //n

    if (sub === s[pointerA]) {
      //n
      pointerA++; //n
      pointerB++; //n
    } else if (sub === s[pointerB]) {
      //n
      isSub = false; //n
    } else {
      //n
      isSub = true; //n
    }
  }

  if (pointerA !== s.length) return false; //1

  return isSub; //1
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("ab", "baab"));

/**
 * This one was deceivingly difficult to me. The need for the pointers was immediately
 * obvious but the edge cases kept keeping me from passing the tests.
 *
 * 1. If the entirety of f was traversed and pointer b did not come before pointer a
 * the algo was returning true which was incorrect
 *
 * 2. Empty strings are substrings of themselves and other strings.
 *
 * 3. If pointer b came before pointer a, it isn't an immediate disqualification, since the
 *  s could be a substring of f later in the string. Case s = "ab" & f = "baab"
 *
 * The solution of 3 being instead of immediately returning false, simply remember that
 * the last occurence of pointerB was before pointerA therefore remembering thus far
 * in the algo that it was not s substring. The still kept the opporunity open for pointerA
 * to come before pointerB and potentially find a substring.
 *
 * Analysis: 11 + 10n 
 * 
 * Notation: O(n)
 *
 */
