// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // return sorted arr
  return arr;
}

function selectionSort(arr) {
  // implement selection sort
  let indexOfMin;
  let curr;
  for (let i = 0; i < arr.length; i++) {
    indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        curr = j;
        if (j !== i) {
          let temp = arr[j];
          arr[j] = arr[indexOfMin];
          arr[indexOfMin] = temp;
        }
      }
    }
  }

  // return sorted arr
  return arr;
}

function mergeSort(arr) {
  // split arr into sorted halves, recursively mergeSort and call the merge function
  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // merges two sorted arrays
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
