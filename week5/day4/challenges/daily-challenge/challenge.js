// challenge.js (ESM)
import { showColorfulMessage } from './colorful-message.js';
import { displayFileContent } from './read-file.js';

// Dynamically import CommonJS module
const { default: greet } = await import('./greeting.js');

console.log(greet('Chaimaa'));
showColorfulMessage();
displayFileContent();




