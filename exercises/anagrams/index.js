// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// regex word.replace(/[^\w]/g, "").toLowerCase()
// remove extraneous characters and lowercase
// character maps
// compare all the letters and quantities inside both
// compare the keys that exist inside both
// ('hello', 'hellos') needs to be false

// build helper function to build character map
// replace and to lowercase
// check if each number of keys is identical in length

// function buildMap(str) {
//   const charMap = {}
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//   return charMap
// }

// function anagrams(stringA, stringB) {
//   if (stringA.length !== stringB.length) return false;

//   let mapA = buildMap(stringA)
//   let mapB = buildMap(stringB)

//   return Object.keys(mapA).length === Object.keys(mapB).length
// }


// build helper to remove extraneous characters, lowercase and sort
// compare strings using comparison operator

function cleanStr(str) {
  return str.replace(/[^w]/g, '').toLowerCase().split('').sort().join('')
}

function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB)
}

module.exports = anagrams;
