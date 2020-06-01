// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// make four for loops, iterate from some start column to some end column
  // each one is responsible for iterating thru and assembling a different side
// for every idx between start and end, insert some value in to the matrix
// I can freely assign some value to any idx within an array
// eg const arr = []; arr[3] = "hi there!"

// create an empty array of arrays called 'results'
// create a counter variable, starting at 1
// as long as (start col <= end col) AND (start row <= end row)
  // loop from start col to end col
  // at results[start_row][i] assign counter variable
  // increment counter
// increment start row
// loop from start row to end row
  // at results[i][end_column] assign counter variable
  // increment counter
// decrement end row
// ...repeat for other two sides

function matrix(n) {
  let results = []

  for (let i = 0; i < n; i++) {
    results.push([])
  }

  let count = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  // constrain where in the grid you're iterating
  while (startCol <= endCol && startRow <= endRow) {
    // top row
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = count;
      count++;
    }
    startRow++;

    // right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = count;
      count++
    }
    endCol--;

    // bottom row
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = count;
      count++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = count;
      count++;
    }
    startCol++;
  }

  return results;
}

module.exports = matrix;
