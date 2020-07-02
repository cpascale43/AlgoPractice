// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((child) => child.data !== data);
  }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(func) {
        // create an empty array
        // insert the root node into the array
        // iterate thru the array
        // while the array still has an element
        // take out the first element
        // retrieve all of its children and stick all the children into the array
        // call function on that node
        // throw that node away
        // repeat for every other elements children

        let store = [];

        store.push(this.root)

        while (store.length) {
            let node = store.shift()
            // node.children.forEach(child => store.push(child))
            store.push(...node.children)
            func(node)
        }
    }

    traverseDF(func) {
        const arr = [this.root]
        while (arr.length) {
            let node = arr.shift()
            arr.unshift(...node.children)
            func(node)
        }
    }
}

module.exports = { Tree, Node };
