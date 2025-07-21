// regex-numbers.js

function returnNumbers(str) {
  const numbers = str.match(/\d/g); // \d matches digits, g = global match
  return numbers ? numbers.join('') : ''; // Join array into string
}

// Example usage
const input = 'k5k3q2g5z6x9bn';
const result = returnNumbers(input);
console.log(result); // Expected output: 532569

// Export function (optional if you use it in another file)
module.exports = returnNumbers;
