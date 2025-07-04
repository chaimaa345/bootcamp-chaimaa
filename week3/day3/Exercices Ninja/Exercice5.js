function getUniqueElements(arr) {
  // Use a Set to automatically remove duplicates
  return [...new Set(arr)];
}

// ✅ Example usage:
const list = [1, 2, 3, 3, 3, 3, 4, 5];
const newList = getUniqueElements(list);

console.log(newList); // Output: [1, 2, 3, 4, 5]
