const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const firstLetters = names.map(name => name[0]); // Step 1: get first letters
const sortedLetters = firstLetters.sort();      // Step 2: sort letters
const societyName = sortedLetters.join('');     // Step 3: join letters

console.log(societyName); // Output: ABJKPS
