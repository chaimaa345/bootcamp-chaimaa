// fileManager.js
const fs = require('fs');

// Read file function
function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

// Write file function
function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

// Export the functions
module.exports = {
  readFile,
  writeFile,
};
