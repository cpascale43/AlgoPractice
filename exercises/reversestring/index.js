// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// or for of syntax
// for (let char of str) {
//  reversed = char + reversed
// }

function reverse(str) {
  let newStr = ''

  for (let i = str.length-1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
}

reverse('abcd')

module.exports = reverse;
