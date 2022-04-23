const path = require('path');
const os = require('os');
const myPath = 'C:/Users/Rajib_Hasan/Desktop/Node/Learn_with_sumit/ServerAndCoreModule/index.js';

console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));

console.log(os.platform());
console.log(os.homedir());
console.log(os.cpus());