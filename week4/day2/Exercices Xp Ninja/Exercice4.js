const letters = ['x', 'y', 'z', 'z'];

// 🔁 Method 1: Using a for loop
const countWithLoop = {};
for (let letter of letters) {
  if (countWithLoop[letter]) {
    countWithLoop[letter] += 1;
  } else {
    countWithLoop[letter] = 1;
  }
}
console.log("Using for loop:", countWithLoop);

// 🔄 Method 2: Using reduce()
const countWithReduce = letters.reduce((acc, curr) => {
  acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
  return acc;
}, {});
console.log("Using reduce():", countWithReduce);

