// Base version: hardcoded divisor 23
function displayNumbersDivisible() {
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log("Sum:", sum);
}

// Call base function
displayNumbersDivisible();

// Bonus version: with parameter
function displayNumbersDivisibleBonus(divisor) {
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log("Sum:", sum);
}

// Example calls for bonus
displayNumbersDivisibleBonus(3);
displayNumbersDivisibleBonus(45);
