import fs from 'fs';

const input = process.argv;
fs.writeFileSync(input[2],input[3]);
console.log(process.argv[2]);