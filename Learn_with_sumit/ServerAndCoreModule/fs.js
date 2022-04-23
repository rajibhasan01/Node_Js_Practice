const fs = require('fs');

fs.writeFileSync('myfile.txt', 'Hello Programmers. ');
fs.appendFileSync('myfile.txt', 'How are you?');

fs.readFile('myfile.txt', (err, data) =>{
    console.log(data.toString());
});

// console.log(data.toString());
console.log('hello');
