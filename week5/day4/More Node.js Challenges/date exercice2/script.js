// script.js

const prompt = require('prompt-sync')();
const getMinutesLived = require('./date');

const userInput = prompt("Enter your birthdate (YYYY-MM-DD): ");
const result = getMinutesLived(userInput);
console.log(result);
