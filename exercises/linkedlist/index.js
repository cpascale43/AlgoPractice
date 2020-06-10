// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

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

  insertFirst(x) {
    let node = new Node(x, this.head)

    this.head = node;
  }

  size() {
    let count = 0;
    let start = this.head;
    while (start) {
      count++;
      start = start.next;
    }
    return count;
  }

  getFirst() {
    let first = this.head;
    return first;
  }
}

module.exports = { Node, LinkedList };
