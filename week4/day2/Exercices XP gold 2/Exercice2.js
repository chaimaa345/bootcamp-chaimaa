const numbers = [1, 2, 2, 3, 4, 4, 5];

// Using Set
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
// Output: [1, 2, 3, 4, 5]
