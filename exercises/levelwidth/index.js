// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// breadth first traversal

// maintain 2 arrays: counters (store the width at each level) + store (queue)
// initialize the store arr with root and 's' stopper variable
// initialize the counters arr and give it a starting element of 0
// enter our loop
// add any children of the node and add to the array
// increment the last counter element
// any time we see the 's', we must have hit the end of some level
// and assume we're processing values on the next level
// so put the value 's' back at the very end of the array
// add an entry to the counters array and initialize it to 0
// as long as there is more than one element in the array keep iterating

function levelWidth(root) {
  const store = [root, "s"];
  const counters = [0];

  // iterate through the array
  while (store.length > 1) {
    const node = store.shift();

    // if node is 's'
    // add a new element to counters
    // add 's' to the end of store
    if (node === "s") {
      counters.push(0);
      store.push("s");
    }

    // if node is an actual node
    // push all of its children onto the end of store
    // increment the last value in counters
    else {
      store.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
