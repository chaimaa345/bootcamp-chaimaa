function isBlank(str) {
  return str.trim() === '';
}

// Test cases
console.log(isBlank(''));       // true (empty string)
console.log(isBlank('   '));    // true (spaces only)
console.log(isBlank('abc'));    // false (not blank)
console.log(isBlank('  abc  ')); // false (spaces + text)
