const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

ourReadStream.on('data', (chunk)=>{
    console.log(chunk);
});

console.log('Hello');