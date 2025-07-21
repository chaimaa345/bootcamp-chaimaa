import fs from 'fs';
import path from 'path';

export default function readFile(filePath) {
  const fullPath = path.resolve(filePath);

  fs.readFile(fullPath, 'utf8', (err, data) => {
    if (err) {
      console.error("❌ Error reading file:", err.message);
    } else {
      console.log("📄 File Content:");
      console.log(data);
    }
  });
}

