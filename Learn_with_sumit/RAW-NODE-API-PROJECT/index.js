/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Rajib Hasan ( rajibhasan01 )
 * Date: 25/04/22
 *
 */

// Dependencies
const http = require('http');

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
    // response handle
    res.end('Hello World');
};

// Start the server
app.creatServer()