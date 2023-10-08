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
function middleNode(head) {
    if (head.next === null) return head;
    const nodes = [];
    let current = head;
    while (current.next) {
        nodes.push(current);
        current = current.next;
    }
    if (nodes.length === 1) return nodes[0].next;
    if (nodes.length % 2) {
        return nodes[(nodes.length + 1) / 2]
    }
    return nodes[nodes.length / 2]
};