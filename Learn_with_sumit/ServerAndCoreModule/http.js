const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello Programmers!');
        res.write('How are you doing?');
        res.end();
    }
    else if(req.url === '/about'){
        res.write('This is about us page');
        res.end();
    }
    else{
        res.write('Not Found');
        res.end();
    }
});

// server.on('connection', (socket)=>{
//     console.log('New connection.....')
// })

server.listen(3000);

console.log('listening on port 3000');