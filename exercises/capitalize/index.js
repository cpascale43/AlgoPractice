// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// [0].toUpperCase()
// slice(1)

// function capitalize(str) {
//   let words = []

//   for (let char of str.split(' ')) {
//     words.push(char[0].toUpperCase() + char.slice(1))
//   }
//   return words.join(' ')
// }

// create 'result' which is the first character of the input string capitalized
// for each char in the string
// if the character to the left is a space
// capitalize it and add it to the 'result'
// else add it to result

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i-1] === ' ') {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }

  return result;
}


module.exports = capitalize;
