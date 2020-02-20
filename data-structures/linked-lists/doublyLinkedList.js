/*
 *
 * Imports
 *
 * */

const newNode = require("./linkedListNode");

/*
 *
 * Class Definition
 *
 * */

class doublyLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    insertAtHead(data) {
        let node = new newNode(data);
        if(this.size === 0) {
            this.head = node;
            this.tail = node;
            this.size = 1;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            this.size ++;
        }
    };
}

/*
 *
 * Tests
 *
 * */

const doublyLinkedList1 = new doublyLinkedList();

doublyLinkedList1.insertAtHead(1);
doublyLinkedList1.insertAtHead(2);

console.log("HEAD - ", doublyLinkedList1.head);
console.log("SIZE - ", doublyLinkedList1.size);

