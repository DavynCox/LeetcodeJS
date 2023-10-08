// This is a linked list I built for the course, nothing to do with Leetcode sry

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class DoublyNode  {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = []
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            this.append(value);
            return this.printList();
        }
        let newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }
    remove(index) {
        if (index >= this.length || index < 0) return;
        const leader = this.traverseToIndex(index-1);
        const replaceNode = leader.next;
        leader.next = replaceNode.next;
        this.length--;
        return this.printList();
    }

    traverseToIndex(index) {
        // We will assume the index is valid for now
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter ++;
        }
        return currentNode;
    }
}


class DoublyLinkedList {
    constructor(value) {
        this.head = new DoublyNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = []
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            this.append(value);
            return this.printList();
        }
        let newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList();
    }
    remove(index) {
        if (index >= this.length || index < 0) return;
        const leader = this.traverseToIndex(index-1);
        const replaceNode = leader.next;
        replaceNode.prev = leader;
        leader.next = replaceNode.next;
        this.length--;
        return this.printList();
    }

    traverseToIndex(index) {
        // We will assume the index is valid for now
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter ++;
        }
        return currentNode;
    }
}

const doublyLinkedList = new DoublyLinkedList(10);
doublyLinkedList.append(5);
doublyLinkedList.append(16);

console.log(doublyLinkedList);