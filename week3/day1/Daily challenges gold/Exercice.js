// Original array
const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

console.log("Using toString():", numbers.toString());
// Output: "5,0,9,1,7,4,2,6,3,8"

console.log("Using join('+'):", numbers.join("+"));
// Output: "5+0+9+1+7+4+2+6+3+8"

console.log("Using join(' '):", numbers.join(" "));
// Output: "5 0 9 1 7 4 2 6 3 8"

console.log("Using join(''):", numbers.join(""));
// Output: "5091742638"

// Part 2: 
// Create a copy to avoid modifying original array
const numbers2 = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

for (let i = 0; i < numbers2.length; i++) {
  // Inner loop for comparing adjacent elements
  for (let j = 0; j < numbers2.length - i - 1; j++) {
    if (numbers2[j] < numbers2[j + 1]) {
      // Swap values using a temporary variable
      let temp = numbers2[j];
      numbers2[j] = numbers2[j + 1];
      numbers2[j + 1] = temp;
    }
  }
  // Log array after each pass to understand the steps
  console.log(`After pass ${i + 1}:`, numbers2);
}

// Final sorted result
console.log("Final sorted array (descending):", numbers2);

