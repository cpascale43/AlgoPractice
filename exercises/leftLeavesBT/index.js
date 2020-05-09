// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val)
//   this.left = (left===undefined ? null : left)
//   this.right = (right===undefined ? null : right)
// }

//     3
//    /  \
//    9   20
//        /  \
//      15    7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

function isLeaf(node) {
  if (!node) {
    return false;
  } else if (!node.left.left && !node.left.right) {
    return true;
  }
  return false;
}

function sumOfLeftLeaves(root) {
  if (!root || root.length === 0) return 0;
  let sum = 0;
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();

    if (node.left) {
      if (isLeaf(node)) {
        sum += node.left.val;
      }
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return sum;
}

module.exports = sumOfLeftLeaves;
