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

  insertFirst(x) {
    // let node = new Node(x, this.head);

    // this.head = node;
    return this.insertAt(x, 0)
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
    // let first = this.head;
    // return first;
    return this.getAt(0)
  }

  getLast() {
    // if (!this.head) return;
    // let start = this.head;

    // while (start) {
    //   if (!start.next) {
    //     return start;
    //   }
    //   start = start.next;
    // }
    return this.getAt(this.size() - 1)
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // let second = this.head.next;

    // this.head = second;
    return this.removeAt(0)
  }

  removeLast() {
    /*if (!this.head) return;
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
    */
   return this.removeAt(this.size() - 1)
  }

  insertLast(x) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(x);
    } else {
      this.insertFirst(x);
    }
    // return this.insertAt(x, this.size() - 1)
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

  forEach(func) {
    let node = this.head

    while (node) {
      func(node)
      node = node.next;
    }
  }

  // generator - can work with a for...of loop w/ list
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };
