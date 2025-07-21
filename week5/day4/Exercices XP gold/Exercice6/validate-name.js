// validate-name.js
const prompt = require('prompt-sync')();

function isValidFullName(name) {
  // Explanation:
  // ^            → start of string
  // [A-Z][a-z]+  → first name: uppercase letter followed by lowercase letters
  // \s           → one space
  // [A-Z][a-z]+  → last name: same pattern
  // $            → end of string
  const regex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
  return regex.test(name);
}

// Ask user for input
const fullName = prompt("Enter your full name (e.g., John Doe): ");

if (isValidFullName(fullName)) {
  console.log("✅ Valid full name!");
} else {
  console.log("❌ Invalid name. Make sure to use only letters, exactly one space, and capital letters at the beginning of each name.");
}
