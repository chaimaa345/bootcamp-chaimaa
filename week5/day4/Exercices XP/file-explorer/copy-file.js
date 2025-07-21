// copy-file.js
const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading source.txt:', err);
    return;
  }

  fs.writeFile('destination.txt', data, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to destination.txt:', err);
      return;
    }
    console.log('✅ File copied successfully to destination.txt');
  });
});
