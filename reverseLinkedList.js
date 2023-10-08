// initial approach

class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

function reverseList(head) {
    const list = [];
    if (!head?.next) return head;
    while (head && head?.val !== null) {
        list.push(head.val);
        head = head.next;
    }
    let currentNode = new ListNode();
    let targetNode = currentNode;
    for (let i = list.length - 1; i >=0; i--) {
        targetNode.val = list[i];
        if (i > 0) {
            targetNode.next = new ListNode();
            targetNode = targetNode.next;
        }
    }
    
    return currentNode;
};

// Improved Approach (I stole this from @malikdinar and added comments):
function reverseList(head) {
    if (!head?.next) return head;
    let prev = null;
    let current = head;
    // while you haven't gotten to the end of the list:
    while (current !== null) {
        // future is the next node down the line you need to shift
        let future = current.next;
        // make the next node the node behind it
        current.next = prev;
        // make the prior node the next node
        prev = current;
        // make the current node the next node 
        current = future;

        // basically fully shifting back, one at a time
    }
    
    return prev;
};