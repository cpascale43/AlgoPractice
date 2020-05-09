// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// Example:
// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// Approach:
// Iterate over array, left -> center <- right
// Store 'count', 'leftIdx', 'rightIdx', 'leftMax', 'rightMax'
// Up until the center of the array,
    // Check if the current element is the new max (L + R)
  // If leftMax < rightMax,
    // add the difference between the leftMax and
    // current element to 'count', and leftIdx++ to keep iterating thru array. (L + R)
  // Else if rightMax < leftMax,
    // add the difference bw rightMax and
    // current element to 'count', and rightIdx++.
// Return 'count'.

const trapRainWater = height => {
  let count = 0;
  let leftIdx = 0;
  let rightIdx = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (leftIdx < rightIdx) {
    if (height[leftIdx] > leftMax) {
      leftMax = height[leftIdx]
    }
    if (height[rightIdx] > rightMax) {
      rightMax = height[rightIdx]
    }

    if (leftMax < rightMax) {
      count += Math.max(0, leftMax - height[leftIdx])
      leftIdx ++;
    } else {
      count += Math.max(0, rightMax - height[rightIdx])
      rightIdx --;
    }
  }

  return count;
}

module.exports = trapRainWater
