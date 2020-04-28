// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// reverse() is an array method not a string method

function palindrome(str) {
  let strReverse = str.split('').reverse().join('')
  return strReverse === str;
}

module.exports = palindrome;
