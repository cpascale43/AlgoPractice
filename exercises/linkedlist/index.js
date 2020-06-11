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

  getLast() {
    if (!this.head) return;
    let start = this.head;

    while (start) {
      if (!start.next) {
        return start;
      }
      start = start.next
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
    let newNode = new Node(x)
    if (!this.head) {
      this.head = newNode;
      return;
    }
    if (!this.head.next) {
      this.head.next = newNode;
      return;
    }

    let previous = this.head;
    let node = this.head.next

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = newNode;
  }


}

module.exports = { Node, LinkedList };
