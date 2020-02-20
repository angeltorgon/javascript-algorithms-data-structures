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

    deleteAtHead() {
        if(this.size === 0) {
            console.log("Linked list is empty.");
        } else if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size = 0;
        } else {
            this.head.next.prev = null;
            this.head = this.head.next;
            this.size --;
        }
    };

    deleteAtTail() {
        if(this.size === 0) {
            console.log("Linked list is empty.");
        } else if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size = 0;
        } else {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.size --;
        }
    };
}

/*
 *
 * Tests
 *
 * */

function printLinkedList(list) {
    if(list.size === 0) {
        console.log("List is empty.");
        return
    }

    console.log("SIZE - ", list.size);
    console.log("head - ", doublyLinkedList1.head.data);
    console.log("tail - ", doublyLinkedList1.tail.data);

    const originalHead = list.head;

    console.log("linked list contents");
    while(list.head !== null) {
        console.log(list.head.data);
        list.head = list.head.next;
    }

    list.head = originalHead;
}

const doublyLinkedList1 = new doublyLinkedList();

doublyLinkedList1.insertAtHead(1);
doublyLinkedList1.insertAtHead(2);
doublyLinkedList1.insertAtHead(3);


doublyLinkedList1.insertAtTail(4);
doublyLinkedList1.insertAtTail(3);
doublyLinkedList1.insertAtTail(2);

printLinkedList(doublyLinkedList1)

doublyLinkedList1.deleteAtHead();
doublyLinkedList1.deleteAtHead();

printLinkedList(doublyLinkedList1)

doublyLinkedList1.deleteAtTail();
doublyLinkedList1.deleteAtTail();
doublyLinkedList1.deleteAtTail();
doublyLinkedList1.deleteAtTail();

console.log("final size  - ", doublyLinkedList1.size);
printLinkedList(doublyLinkedList1)
