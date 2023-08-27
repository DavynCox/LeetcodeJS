function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    let returnList = new ListNode(0);
    let headOfNewList = returnList;
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            returnList.next = list1
            list1 = list1.next
        } else {
            returnList.next = list2
            list2 = list2.next
        } 
        returnList = returnList.next;
    }

    if (list1 === null) {
        returnList.next = list2;
    }
    if (list2 === null) {
        returnList.next = list1;
    }
    return headOfNewList.next;
};