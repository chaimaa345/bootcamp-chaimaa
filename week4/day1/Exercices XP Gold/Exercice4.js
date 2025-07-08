const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
console.log(add5(12));

//add5 is now a function that adds 5 to any number you give it.

// add5(12);

// his calls the returned function SO: 5 + 12 = 17