function biggestNumberInArray(arrayNumber) {
  let max = 0;

  for (let item of arrayNumber) {
    // Check if the item is a number
    if (typeof item === 'number') {
      if (item > max) {
        max = item;
      }
    }
  }

  return max;
}

// ✅ Example usage:
const array = [-1, 0, 3, 100, 99, 2, 99];   // should return 100
const array2 = ['a', 3, 4, 2];              // should return 4
const array3 = [];                          // should return 0

console.log(biggestNumberInArray(array));   // 100
console.log(biggestNumberInArray(array2));  // 4
console.log(biggestNumberInArray(array3));  // 0
