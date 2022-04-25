/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Rajib Hasan ( rajibhasan01 )
 * Date: 25/04/22
 *
 */

// Dependencies
const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder')

// App object - module scaffolding
const app = {};

// Configuration
app.config = {
    port: 3000
};

// Create server
app.creatServer = () =>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () =>{
        console.log(`listening to port ${app.config.port}`)
    })
};

// Handle request response
app.handleReqRes = (req, res) =>{
    // Request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', ()=>{
        realData += decoder.end();
        console.log(realData);
        res.end('Hello programers');
    });

    console.log(realData);
    console.log(headersObject);
    console.log(queryStringObject);
    console.log(method);
    console.log(trimmedPath);
    // response handle
    // res.end('Hello programers');
};

// Start the server
app.creatServer()