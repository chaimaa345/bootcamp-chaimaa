// Part 1: Flatten nested array
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const newArray = array.flat(2);
console.log(newArray); // Output: [1, 2, 3, [4], [5]]

// BONUS: One line
const oneLineArray = [[1],[2],[3],[[[4]]],[[[5]]]].flat(2);
console.log(oneLineArray); // Output: [1, 2, 3, [4], [5]]


// Part 2: Greeting array into sentence arrays
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const newGreeting = greeting.map(arr => arr.join(" "));
console.log(newGreeting);
// Output: ["Hello young grasshopper!", "you are", "learning fast!"]


// Part 3: Turn greeting into single string
const greetingStr = greeting.map(arr => arr.join(" ")).join(" ");
console.log(greetingStr);
// Output: "Hello young grasshopper! you are learning fast!"


// Part 4: Flatten deeply nested number
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const flatTrapped = trapped.flat(Infinity);
console.log(flatTrapped);
// Output: [3]
