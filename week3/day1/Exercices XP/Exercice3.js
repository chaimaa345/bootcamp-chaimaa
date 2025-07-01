let number;

do {
  number = prompt("Please enter a number:");
  number = Number(number);
  console.log(`You entered: ${number} (type: ${typeof number})`);
} while (number < 10);

console.log("Thanks! You entered a number 10 or greater.");

