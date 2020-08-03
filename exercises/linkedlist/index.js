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
    // let node = new Node(data, this.head);
    // this.head = node;
    this.insertAt(data, 0)
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
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(x) {
    const last = this.getLast();

    if (last) {
      // there are some existing nodes in our chain
      last.next = new Node(x);
    } else {
      // the chain is empty
      this.head = new Node(x);
    }
  }

  getAt(idx) {
    if (!this.head) {
      return null;
    }

    let count = 0;
    let node = this.head;

    while (node) {
      if (count === idx) {
        return node;
      }
      count++;
      node = node.next;
    }
    return null;
  }

  removeAt(idx) {
    if (!this.head) {
      return;
    }

    if (idx === 0) {
      this.head = this.head.next;
      return;
    }

    let previous = this.getAt(idx - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, idx) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (idx === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let previous = this.getAt(idx - 1) || this.getLast();
    previous.next = new Node(data, previous.next);
  }
}

module.exports = { Node, LinkedList };
