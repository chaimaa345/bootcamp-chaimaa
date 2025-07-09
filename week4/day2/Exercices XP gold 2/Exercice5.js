const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// Align turtle and rabbit with spaces using padStart
turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);

// Output the result
console.log(startLine);
console.log(turtle);
console.log(rabbit);
//turtle = turtle.trim().padEnd(9, '=');
//console.log(turtle); // Outputs: 🐢=======

/*Removes extra spaces (none here)
Then adds = at the end until the total length is 9 characters and The turtle emoji '🐢' is actually 2 code units 
so the result will be 🐢=======
*/