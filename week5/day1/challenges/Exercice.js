// Function 1
function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every(word => typeof word === "string")) {
      const upperCased = words.map(word => word.toUpperCase());
      resolve(upperCased);
    } else {
      reject("Error: Not all elements are strings.");
    }
  });
}

// Function 2
function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject("Error: Array must contain more than 4 words.");
    }
  });
}

// Test 1 - Fails on not all strings
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Test 2 - Fails on array too short
makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Test 3 - Works!
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result)) // Output: ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]
  .catch(error => console.log(error));
