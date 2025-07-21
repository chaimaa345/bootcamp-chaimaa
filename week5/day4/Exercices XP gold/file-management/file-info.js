// file-info.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Needed to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'data', 'example.txt');

function displayFileInfo() {
  const exists = fs.existsSync(filePath);

  console.log(`File exists: ${exists}`);

  if (exists) {
    const stats = fs.statSync(filePath);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Created at: ${stats.birthtime}`);
  }
}

export default displayFileInfo;
