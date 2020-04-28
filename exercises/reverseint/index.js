// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Math.sign()
// number.toString()
// Number(str) or parseInt(number.toString())

// function reverseInt(n) {
//   if (Math.sign(n) === -1) {
//     n = n.toString().slice(1,n.length)
//     return -parseInt(n.split('').reverse().join(''))
//   }
//   return parseInt(n.toString().split('').reverse().join(''))
// }

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('')

  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
