// app.js
const { readFile, writeFile } = require('./fileManager');

// Read from "Hello World.txt"
const helloContent = readFile('Hello World.txt');
console.log('Content of Hello World.txt:', helloContent);

// Write to "Bye World.txt"
writeFile('Bye World.txt', 'Writing to the file');
console.log('Successfully wrote to Bye World.txt');
