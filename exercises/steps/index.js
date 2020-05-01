// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// from 0 to n (iterate thru rows)
// create an empty string 'stairs'
// from 0 to n (iterate thru cols)
// if current col < current row
  // add a '#' to stair
// else add a space to stair
// console log stair

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += "#";
      } else {
        stair += " "
      }
    }

    console.log(stair)
  }
}

// if (row === n) then we have hit the end of our problem
// if stair.length === n, we are at the end of a row
// if stair.length <= row, we add a '#', otherwise add a space

// function steps(n, row = 0, stair = '') {
//   if (n === row) return;

//   if (n === stair.length) {
//     console.log(stair)
//     return steps(n, row + 1)
//   }

//   if (stair.length <= row) {
//     stair += '#'
//   } else {
//     stair += " "
//   }

//   steps(n, row, stair)
// }

module.exports = steps;
