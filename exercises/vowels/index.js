// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   str = str.toLowerCase()
//   let count = 0;
//   let vowelCheck = ['a', 'e', 'i', 'o', 'u']

//   for (let char of str) {
//     if (vowelCheck.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// str.match() returns an array containing the matches, or null
// /[aeiou]/gi -> search for vowels, globally and case-insensitive
// return the length of str.match()

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0
}

module.exports = vowels;
