/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  if (!head) return null;
  if (!head.next) return head;
  if (!head.next.next) return head.next;

  const index = new Map();
  let count = 0;
  while (head.next) {
    index.set(count, head);
    count++;
    head = head.next;
    // index.delete(Math.ceil(count / 2 - 1));
  }

  return index.get(Math.ceil(count / 2));
};

const list0 = { val: 1, next: { val: 3, next: null } };
const list1 = { val: 0, next: { val: 1, next: { val: 3, next: null } } };
const list2 = { val: 0, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 5, next: null } } } } };
const list3 = {
  val: 0,
  next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: { val: 6, next: { val: 7, next: { val: 8, next: { val: 9, next: null } } } } } } } } },
};
console.log(middleNode(list0));

/**
 * 
 * analysis: 6 + 4n
 * 
 * notation: O(n)
 * 
 * 
 * This solution is faster than like 98% of solutions, but only beats about 50% in memory. 
 * By uncommenting line 46 ((index.delete(Math.ceil(count / 2 - 1)), you can decrease the
 * memory to beat about 86% of the solutions but the speed only beats about 44%. Considering 
 * the memory used is less than 50mb, line 46 doesn't seem necessary. Also, there is only a 
 * few mb difference anyways. 
 * 
 * 
 * https://leetcode.com/problems/middle-of-the-linked-list/submissions/812370173/
 */
