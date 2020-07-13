// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    // look at this.data
    // then look at the value of the data coming into the function
    // if incoming is less than current
    // pass this node off to the left
    // else
    // pass node off to the right

    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    // is data less than or greater than current node?
    // base case
    if (this.data === data) {
      return this;
    }

    // right
    if (this.data < data && this.right) {
      return this.right.contains(data);
      // left
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

module.exports = Node;
