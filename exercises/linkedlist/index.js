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
}

module.exports = { Node, LinkedList };
