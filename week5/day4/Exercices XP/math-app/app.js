// app.js
const _ = require('lodash');
const math = require('./math');

// Use custom module
const sum = math.add(10, 5);
const product = math.multiply(10, 5);

// Use lodash for extra utilities
const numbers = [1, 2, 3, 4, 5, 5, 2];
const uniqueNumbers = _.uniq(numbers);
const max = _.max(numbers);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
console.log(`Unique Numbers: [${uniqueNumbers}]`);
console.log(`Max Number: ${max}`);
