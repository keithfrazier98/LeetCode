/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoListsArray = function (list1, list2) {
  let pointerL1 = 0;
  let pointerL2 = 0;
  const finalList = [];

  while (list1[pointerL1] || list2[pointerL2]) {
    if (!list1[pointerL1] && list2[pointerL2]) {
      finalList.push(...list2.slice(pointerL2));
      return finalList;
    } else if (!list2[pointerL2] && list1[pointerL1]) {
      finalList.push(...list1.slice(pointerL1));
      return finalList;
    } else if (list1[pointerL1] < list2[pointerL2]) {
      //lt, gt, eq
      finalList.push(list1[pointerL1]);
      pointerL1++;
    } else if (list1[pointerL1] === list2[pointerL2]) {
      finalList.push(...[list1[pointerL1], list2[pointerL2]]);
      pointerL1++;
      pointerL2++;
    } else {
      finalList.push(list2[pointerL2]);
      pointerL2++;
    }
  }

  return finalList;
};

// console.log(mergeTwoListsArray([1, 2, 4], [1, 3, 4]));
// console.log(mergeTwoListsArray([], [1, 3, 4]));
// console.log(mergeTwoListsArray([1, 2, 4], []));

/**
 * This LC question is a bit frustrating because they define the problem
 * referencing linked lists but they don't ever show the actual linked list
 * if you log it to the console so it seems that the function is just passed
 * arrays for the tests. The solution above is for arrays. The solution below
 * is for linked lists as defined by the ListNode function below.
 *
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 *
 * @param {*} val
 * @param {*} next
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let current = new ListNode();
  let head;

  if (!list1) return list2;
  if (!list2) return list1;

  while (list1 || list2) {
    let next;
    if (list1 && (!list2 || list1.val < list2.val)) {
      next = list1;
      list1 = list1.next;
    } else {
      next = list2;
      list2 = list2.next;
    }

    if (current) current.next = next;

    current = next;

    if (!head) head = current;
  }

  return head;
};

const list1 = { val: 0, next: { val: 1, next: { val: 3, next: { val: 6, next: null } } } };
const list2 = { val: 0, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 5, next: null } } } } };
// console.log(mergeTwoLists(list1, list2));

const list3 = { val: null, next: null };
// console.log(mergeTwoLists(list1, list3));
// console.log(mergeTwoLists(list3, list1));
console.log(mergeTwoLists(list3, list3));

/**
 *
 * Analysis: 5 + 11n
 *
 * Notation: O(n)
 *
 * This solution is faster than 97% and less memory thatn 77% of submitted solutions.
 * https://leetcode.com/problems/merge-two-sorted-lists/submissions/812328625/
 *
 */
