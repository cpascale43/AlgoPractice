// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// can simplify by only writing insertAt, removeAt, and getAt

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    let node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head
  }
}

module.exports = { Node, LinkedList };
