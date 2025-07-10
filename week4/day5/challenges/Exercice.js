function isAnagram(str1, str2) {
  // Helper function: clean and sort a string
  const cleanString = (str) => {
    return str
      .toLowerCase()
      .replace(/\s/g, "")   // remove all whitespace
      .split("")            // convert to array of characters
      .sort()               // sort alphabetically
      .join("");            // convert back to string
  };

  return cleanString(str1) === cleanString(str2);
}
console.log(isAnagram("Astronomer", "Moon starer"));        // true
console.log(isAnagram("School master", "The classroom"));   // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true
console.log(isAnagram("Hello", "World"));                   // false
