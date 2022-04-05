// const colors = require('colors');
import colors from 'colors';
console.log('Md. Rajib Hasan'.bgRed)

import chalk from 'chalk';
console.log(chalk.blue('Hello world!'));

import http from 'http';

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify({name:'Md. Rajib Hasan', email:'hasan.rajib1996@gmail.com'}));
    res.end();
}).listen(5000);