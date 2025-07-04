function isPalindrome(str) {
  // Optional: convert to lowercase for case-insensitive comparison
  str = str.toLowerCase();

  // Reverse the string
  let reversed = str.split('').reverse().join('');

  // Check if original and reversed strings are equal
  return str === reversed;
}

// ✅ Example usage:
console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("kayak"));  // true
console.log(isPalindrome("hello"));  // fal
