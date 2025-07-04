function abbrevName(name) {
  const parts = name.trim().split(" ");
  if (parts.length < 2) {
    return name; // If there's only one word, return it as is
  }
  return `${parts[0]} ${parts[1][0].toUpperCase()}.`;
}

// Test case
console.log(abbrevName("Robin Singh"));   // ➞ "Robin S."
console.log(abbrevName("John Doe"));      // ➞ "John D."
console.log(abbrevName("Alice"));         // ➞ "Alice"
