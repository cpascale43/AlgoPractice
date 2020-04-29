// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Is string A an anagram of string B?
// Does the given string have any repeated characters in it?
// What is the most common character in a string?

// Counting or verifying - build an object storing the number of characters that appear
// walk through the object, find the property with the highest number assigned to it, and we will immediately know that property has the most frequent character

// could be a for of loop -
// for (char of str) {
//   obj[char] = obj[char] + 1 || 1
// }

// could use max/maxChar variables - iterate thru the obj and set max equal to the current max and maxChar to the key at that location
// let max = 0
// let maxChar = ''
// for (let char in obj) {
//   if (obj[char] > max) {
//     max = obj[char]
//     maxChar = char
//   }
// }

function maxChar(str) {
  let obj = {}
  str.split('').forEach(char => {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  })

  const highest = Math.max(...Object.values(obj))

  for (let key in obj) {
    if (obj[key] === highest) {
      return key;
    }
  }
}


module.exports = maxChar;
