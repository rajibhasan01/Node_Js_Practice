const http = require('http');
// node js er moddhe server er request and response handle kore

// function dataControl(req, res){
//     res.write("<h1>Hello this is rajib hasan</h1>");
//     res.end();
// }

http.createServer((req,res)=>{
    res.write("<h1>Hello this is rajib hasan</h1>");
    res.end()
}).listen(4500);
