/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;
  let newNode = null;
  while (head) {
    newNode = new ListNode(head.val, newNode);
    head = head.next;
  }
  return newNode;
};

const list1 = { val: 0, next: { val: 1, next: { val: 3, next: { val: 6, next: null } } } };
console.log(reverseList(list1));

/**
 * 
 * Analysis: 3 + 3n
 * 
 * Notation: O(n)
 * 
 */