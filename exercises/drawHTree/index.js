function drawLine(x1, y1, x2, y2) {
  console.log(x1, y1)
  console.log(x2, y2)
}

function drawTree(x, y, length, depth) {
    // base case
    if (depth === 0) {
      return;
    }

    // parallel
    drawLine(x - length/2, y, x + length/2, y)

    // perpendicular
    drawLine(x - length/2, y + length/2, x - length/2, y - length/2)
    drawLine(x + length/2, y + length/2, x + length/2, y - length/2)

    const newX1 = x - length/2
    const newX2 = x + length/2
    const newY1 = y - length/2
    const newY2 = y + length/2
    const newLength = length / Math.sqrt(2)

    drawHTree(newX2, newY2, newLength, depth--)
    drawHTree(newX1, newY1, newLength, depth--)
    drawHTree(newX2, newY1, newLength, depth--)
    drawHTree(newX1, newY2, newLength, depth--)
}

module.exports = drawTree
