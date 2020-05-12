function isCousins(root, x, y) {
  if (root.length === 0) return false;
  const queue = [root]
  console.log(queue)

  while (queue.length) {
      let size = queue.length;
      let foundX = false;
      let foundY = false;

  for (let i = 0; i < size; i++) {
      let node = queue.shift()

      if (node.left && node.right) {
          if ((node.left.val === x && node.right.val === y) || (node.left.val === y && node.right.val === x)) return false;
      }
      if (node.val === x) foundX = true;
      if (node.val === y) foundY = true
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
  }
      if (foundX && foundY) return true;
  }

  return false
};

module.exports = isCousins
