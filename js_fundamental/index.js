const app = require('./app')

console.log(app.x);

console.log(app.z());


const arr = [2,4,7,1,3,8,3];

const new_arr = arr.filter((item)=>{return item >3})
console.log(new_arr);



// core module
const fs = require('fs');
fs.writeFileSync("hello.txt", "new file created");

console.log("->>", __dirname);

const fsw = require('fs').writeFileSync;
fsw("code.txt", "code file created");