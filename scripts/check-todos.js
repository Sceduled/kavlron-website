const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let found = false;
console.log("Checking for TODO tokens...");

walkDir(path.join(__dirname, 'src'), function(filePath) {
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.md')) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('{{TODO:')) {
      console.error(`TODO found in ${filePath}`);
      found = true;
    }
  }
});

if (found) {
  console.error("Please resolve all {{TODO: ...}} tokens before building.");
  process.exit(1);
} else {
  console.log("No TODOs found. Safe to build.");
}
