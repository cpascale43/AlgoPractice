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
    let node = new Node(x, this.head);

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

  getLast() {
    if (!this.head) return;
    let start = this.head;

    while (start) {
      if (!start.next) {
        return start;
      }
      start = start.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    let second = this.head.next;

    this.head = second;
  }

  removeLast() {
    if (!this.head) return;
    // if the list has length 1
    if (!this.head.next) {
      this.head = null;
      return;
    }

    // two pointers
    let previous = this.head;
    let node = this.head.next;

    // if the node's next value is null,
    while (node.next) {
      previous = node;
      node = node.next;
    }

    // set previous' value to null
    // "deleting" the current node
    previous.next = null;
  }

  insertLast(x) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(x);
    } else {
      this.insertFirst(x);
    }
  }

  getAt(idx) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === idx) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(idx) {
    let previous;
    if (!this.head) {
      return null;
    }
    if (idx === 0) {
      this.head = this.getAt(idx + 1);
      return;
    }
    previous = this.getAt(idx - 1);
    previous.next = this.getAt(idx + 1);
  }

  insertAt(data, idx) {
    let previous;

    if (!this.head) {
      this.head = new Node(data);
      return null;
    }

    if (idx === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    if (idx > this.size()) {
      previous = this.getAt(this.size() - 1)
      previous.next = new Node(data, previous.next)
      return;
    }

    previous = this.getAt(idx - 1);
    previous.next = new Node(data, previous.next);
  }
}

module.exports = { Node, LinkedList };
