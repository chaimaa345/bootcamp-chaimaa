// read-file.js
import fs from 'fs';

export function displayFileContent() {
  fs.readFile('./files/file-data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Error reading file:', err);
      return;
    }
    console.log('📄 File Content:');
    console.log(data);
  });
}
