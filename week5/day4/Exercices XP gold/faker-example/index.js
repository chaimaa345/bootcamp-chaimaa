// index.js
const { faker } = require('@faker-js/faker');
const prompt = require('prompt-sync')();

const users = [];

// Function to generate fake user data
function addFakeUser() {
  const user = {
    name: faker.person.fullName(),
    address: {
      street: faker.location.streetAddress(),
      country: faker.location.country()
    }
  };
  users.push(user);
  console.log("Fake user added:", user);
}

// Bonus: Function to add a real user from user input
function addRealUser() {
  const name = prompt('Enter your name: ');
  const street = prompt('Enter your street address: ');
  const country = prompt('Enter your country: ');

  const user = {
    name,
    address: {
      street,
      country
    }
  };
  users.push(user);
  console.log("Real user added:", user);
}

// Main execution
console.log("Choose an option:");
console.log("1. Add fake user");
console.log("2. Add real user from input");

const choice = prompt("Enter 1 or 2: ");

if (choice === '1') {
  addFakeUser();
} else if (choice === '2') {
  addRealUser();
} else {
  console.log("Invalid choice.");
}

console.log("\nAll users:");
console.log(users);
