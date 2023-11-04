const fs = require('node:fs');
const text = fs.readFileSync('./file.txt', 'utf-8');
console.log(text)