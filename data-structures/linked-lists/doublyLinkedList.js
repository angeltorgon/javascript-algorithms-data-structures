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

    insertAtTail(data) {
        let node = new newNode(data);
        if(this.size === 0) {
            this.head = node;
            this.tail = node;
            this.size = 1;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
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
doublyLinkedList1.insertAtHead(3);


doublyLinkedList1.insertAtTail(4);
doublyLinkedList1.insertAtTail(3);
doublyLinkedList1.insertAtTail(2);

console.log("SIZE - ", doublyLinkedList1.size);

console.log("linked list contents");
while(doublyLinkedList1.head !== null) {
    console.log(doublyLinkedList1.head.data);
    doublyLinkedList1.head = doublyLinkedList1.head.next;
}

console.log("tail - ", doublyLinkedList1.tail.data);

