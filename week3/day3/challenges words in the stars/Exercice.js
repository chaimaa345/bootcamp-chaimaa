// 1. Prompt the user for input
const userInput = prompt("Enter several words separated by commas:");

// 2. Convert the input into an array and trim extra spaces
const words = userInput.split(",").map(word => word.trim());

// 3. Find the longest word to calculate the width of the frame
const maxLength = Math.max(...words.map(word => word.length));

// 4. Create the top and bottom border of stars
const border = "*".repeat(maxLength + 4); // 4 = 2 for spaces, 2 for stars

console.log(border);

// 5. Print each word in the frame
for (let word of words) {
  const spaces = " ".repeat(maxLength - word.length);
  console.log(`* ${word}${spaces} *`);
}

console.log(border);
