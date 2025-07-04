function swapCase(str) {
  let swapped = '';

  for (let char of str) {
    // Check if character is uppercase
    if (char === char.toUpperCase()) {
      swapped += char.toLowerCase(); // convert to lowercase
    } else {
      swapped += char.toUpperCase(); // convert to uppercase
    }
  }

  return swapped;
}

// Test case
console.log(swapCase('The Quick Brown Fox')); 
// Output: "tHE qUICK bROWN fOX"
