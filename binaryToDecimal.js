/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
function getDecimalValue(head) {
    let binaryString = "";
    let current = head;
    while (current) {
        binaryString += current.val;
        current = current.next;
    }
    return parseInt(binaryString, 2);
};