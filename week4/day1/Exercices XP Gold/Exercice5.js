const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
console.log(compose(add1, add5)(10));// Output: 16
//const add1 = (num) => num + 1;
//Adds 1 to its input
//const add5 = (num) => num + 5;
//Adds 5 to its input.
//compose(add1, add5)(10);
//g(a) → add5(10) → 15
//f(15) → add1(15) → 16